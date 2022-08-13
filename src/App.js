import "./styles.css";
import Product from "./components/product";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { getAllProducts } from "./actions/product";

export default function App({ key }) {
	const dispatch = useDispatch();
	const fetchProducts = async () => {
		const response = await axios.get("./data/data.json").catch((err) => {
			console.log("err", err);
		});
		dispatch(getAllProducts(response.data.products));
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const products = useSelector((state) => state.productList);
	console.log(key);
	return (
		<div className='App'>
			{products.map((product) => (
				<Product
					img={product.p_image}
					title={product.brand}
					price={product.list_price}
				/>
			))}
		</div>
	);
}
