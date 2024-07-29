import React from 'react';
import { useState } from 'react';
import { CInput } from '../CInput/CInput.jsx';
import { LoginUser } from '../../services/apiCalls.js';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import './CLogin.css';

export const CLogin = () => {
	const navigate = useNavigate();
	const [credentials, setCredentials] = useState({
		email: '',
		password_hash: '',
	});

	function handleChange(e) {
		console.log('handleChange');
		setCredentials((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value, //se ponen corchetes para indicar que esa propiedad es dinámica y cambia
		}));
	}
	async function login() {
		try {
			console.log(credentials);
			const response = await LoginUser(credentials); // guarda la respuesta en una variale
			if (response.success) {
				const decodedToken = jwtDecode(response.token);
				const passport = {
					token: response.token,
					tokenData: decodedToken,
				};
				localStorage.setItem('passport', JSON.stringify(passport));
				navigate('/profile');
			} else {
				alert(response.message);
			}
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className='log-container'>
			<h1>¡Welcome back!</h1>
			<h3>Please log in to your account to view or book your appointments.</h3>
			<div>
				<CInput
					className='log-input'
					type='email'
					name='email'
					placeholder='Put your email'
					emitFunction={handleChange}
				/>
			</div>
			<div>
				<CInput
					className='log-input'
					type='password'
					name='password_hash'
					placeholder='Put your password'
					emitFunction={handleChange}
				/>
			</div>
			<CInput
				className='log-button'
				type='button'
				name='button'
				value='Login'
				clickFunction={login}
			/>
		</div>
	);
};
