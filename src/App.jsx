import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { appRoutes } from "./routes";
import { Suspense, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

function App() {
	const cartInitialState = {
		totalAmount: 0,
		numberOfItems: 0,
		cartItems: [],
	};
	const [cartItems, setCartItems] = useState(cartInitialState);
	const [user, setUser] = useState({});
	const [isLogged, setisLogged] = useState(false);
	const location = useLocation();
	return (
		<div className="App">
			<Navbar cartItemsCount={cartItems.numberOfItems} isLogged={isLogged} />
			<SwitchTransition component={null}>
				<CSSTransition
					key={location.pathname}
					classNames="fade"
					timeout={300}
					unmountOnExit
				>
					<Suspense fallback={() => <h1>Loading...</h1>}>
						<Routes location={location}>
							{appRoutes.map((route) => {
								if (route.requiresAuth && !isLogged) {
									return (
										<Route
											key={route.path}
											exact
											path={route.path}
											element={<Navigate replace to="/login" />}
										/>
									);
								} else {
									return (
										<Route
											key={route.path}
											exact
											path={route.path}
											element={
												<route.component
													_cartItems={cartItems}
													setCartItems={setCartItems}
													setUser={setUser}
													setisLogged={setisLogged}
													user={user}
												/>
											}
										/>
									);
								}
							})}
						</Routes>
					</Suspense>
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
}

export default App;
