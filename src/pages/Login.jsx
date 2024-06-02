import { useState } from "react";
import { authenticateUser } from "../utils";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser, setisLogged }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleLogin = (e) => {
		setLoading(true);
		e.preventDefault();
		const check = () => navigate("/products");
		const getUser = async () => {
			const response = await authenticateUser(email, password);
			response
				? (setUser(response), setisLogged(true), check())
				: setErrorMsg("Invalid Email Or Password");
			console.log("RESPONSE", response);
			setLoading(false);
		};
		getUser();
		
	};

	return (
		<form className="login-form">
			<span className="error-span">{errorMsg}</span>
			<label htmlFor="username" className="login-label">
				Email
			</label>
			<input
				type="email"
				name="email"
				className="login-inp"
				placeholder="Email"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<label htmlFor="password" className="login-label">
				Password
			</label>
			<input
				type="password"
				name="password"
				className="login-inp"
				placeholder="Password"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
			<button type="submit" onClick={handleLogin} disabled={loading ? true : false}>
				{!loading ? 'Login' : 'Loading...'}
			</button>
		</form>
	);
};

export default Login;
