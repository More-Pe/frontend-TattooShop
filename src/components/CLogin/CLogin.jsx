import React from 'react';
import { useState } from 'react';
import { CInput } from '../CInput/CInput.jsx'
import { LoginUser } from '../../apiCalls/apiCalls.js';
import { useNavigate } from 'react-router-dom';

export const CLogin = () => {
	const navigate = useNavigate();
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	function handleChange(e) {
		console.log('handleChange');
		setCredentials((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value, //square brackets are used to indicate that this property is dynamic (change)
		}));
	}
	async function login() {
		try {
			console.log(credentials);
			const response = await LoginUser(credentials); // save response in a variable
			if (response.success) {
				navigate('/users/myprofile');
			} else {
				alert(response.message)
			}
			
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			<h1>Login</h1>
			<div>
				<CInput
					type="email"
					name="email"
					placeholder="Email"
					emitFunction={handleChange}
				/>
			</div>
			<div>
				<CInput
					type="password"
					name="password"
					placeholder="Password"
					emitFunction={handleChange}
				/>
			</div>
			<CInput
				type="button"
                name="button"
				value="Login"
				clickFunction={login}
			/>
		</>
	);
};
