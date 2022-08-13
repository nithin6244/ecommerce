export function getAllProducts(product) {
	return {
		type: "PRODUCT",
		payload: product,
	};
}
