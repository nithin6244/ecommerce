import "./product.css";

const Product = ({ img, price, title }) => {
	const data = {
		id: "1",
		brand: "MP Biomedicals",
		product_title: "L-TYROSINE",
		discount: "12%",
		list_price: 13000,
		p_image:
			"https://biomall.live/assets/product/mp-biomedicals_1521887454.jpg",
		pack_size: "500",
		stock: "5",
	};
	return (
		<div className='container'>
			<img src={img}></img>
			<button class='btn'>
				<i class='fa fa-home'></i> Home
			</button>
			<h3>{title}</h3>
			<h4 className='product_price'>{`₹ ${price}`}</h4>
		</div>
	);
};

export default Product;
