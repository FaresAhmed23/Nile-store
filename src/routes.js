import Home from "./pages/Home";
import { lazy } from "react";

export const ALLOWED_CATEGORIES = {
	MENS: "men's clothing",
	WOMENS: "women's clothing",
	JEWELERY: "jewelery",
	ELECTRONIC: "electronics",
};

const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import('./pages/Cart'))
const Checkout = lazy(() => import('./pages/Checkout'))
const Login = lazy(() => import('./pages/Login'))
const NotFound = lazy(() => import('./pages/NotFound'))
export const appRoutes = [
	{
		path: "/",
		component: Home,
		requiresAuth: false,
	},
	{
		path: "/products",
		component: Products,
		requiresAuth: false,
	},
	{
		path: "/cart",
		component: Cart,
		requiresAuth: false,
	},
	{
		path: "/checkout",
		component: Checkout,
		requiresAuth: true,
	},
	{
		path: "/login",
		component: Login,
		requiresAuth: false,
	},
	{
		path: "*",
		component: NotFound,
		requiresAuth: false,
	},
];
