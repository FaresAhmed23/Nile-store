import React, { useEffect, useState } from "react";
import { fetchProducts } from "../utils";
import ProductCard from "../components/productCard";
import { ALLOWED_CATEGORIES } from "../routes";
const Products = ({ setCartItems }) => {
	const [allProducts, setAllProducts] = useState([]);
	const [products, setProducts] = useState([]);
	const [activeCat, setActiveCat] = useState("All");

	const handlefilterProducts = (productCategory = null) => {
		if (productCategory) {
			const filterProducts = allProducts.filter(
				(product) => product.category === productCategory,
			);
			setProducts(filterProducts);
		} else {
			setProducts(allProducts);
		}
	};
	useEffect(() => {
		const getProducts = async () => {
			const response = await fetchProducts();
			setProducts(response);
			setAllProducts(response);
		};
		getProducts().catch((e) => console.error("Error: ", e));
	}, []);

	return (
		<div className="products-cont">
			<div className="category-select">
				<span
					onClick={() => {
						handlefilterProducts();
						setActiveCat("All");
					}}
					className={activeCat === "All" ? "cat-active" : ""}
				>
					All
				</span>
				<span
					onClick={() => {
						handlefilterProducts(ALLOWED_CATEGORIES.MENS);
						setActiveCat("Men");
					}}
					className={activeCat === "Men" ? "cat-active" : ""}
				>
					Men Cloth
				</span>
				<span
					onClick={() => {
						handlefilterProducts(ALLOWED_CATEGORIES.WOMENS);
						setActiveCat("Women");
					}}
					className={activeCat === "Women" ? "cat-active" : ""}
				>
					Women Cloth
				</span>
				<span
					onClick={() => {
						handlefilterProducts(ALLOWED_CATEGORIES.ELECTRONIC);
						setActiveCat("electronics");
					}}
					className={activeCat === "electronics" ? "cat-active" : ""}
				>
					Electronics
				</span>
				<span
					onClick={() => {
						handlefilterProducts(ALLOWED_CATEGORIES.JEWELERY);
						setActiveCat("jewelery");
					}}
					className={activeCat === "jewelery" ? "cat-active" : ""}
				>
					Jewelery
				</span>
			</div>
			<div className="product-card-cont">
				{products.length > 0 &&
					products.map((product) => (
						<ProductCard
							id={product.id}
							rating={product.rating}
							img={product.image}
							categoryName={product.category}
							productName={product.title}
							description={product.description}
							price={product.price}
							setCartItems={setCartItems}
						/>
					))}
			</div>
		</div>
	);
};

export default Products;
