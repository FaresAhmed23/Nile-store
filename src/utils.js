const BASE_URL = "https://fakestoreapi.com";
import axios from "axios";

export const fetchProducts = async () => {
	const response = await axios.get(`${BASE_URL}/products`);
	return response.data;
};
export const authenticateUser = async (email, password) => {
	const response = await axios.get(`${BASE_URL}/users`);
	const authenticate = response.data.find(
		(user) => user.email === email && user.password === password,
	);
	return authenticate;
};
