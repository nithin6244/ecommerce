import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ updateKey }) => {
	const [d, setD] = useState("");
	return (
		<div className='header_container'>
			<div className='header_top'>
				<Link to={"/home"} style={{ textDecoration: "none", color: "black" }}>
					<h2 className='header_top_brand'>My Store</h2>
				</Link>
				<div className='header_top_right'>
					<i class='fa fa-shopping-cart fa-lg' aria-hidden='true'></i>
					<div className='shopping_icon_number'>1</div>
				</div>
			</div>
			<div className='header_bottom'>
				<div className='header_bottom_search_box'>
					<input
						value={d}
						onChange={(e) => setD(e.target.value)}
						className='search_input'
						type='text'
						placeholder='Search By Brand or Title'
					/>
					<div className='search_icon' onClick={() => updateKey(d)}>
						<i class='fa fa-search'></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
