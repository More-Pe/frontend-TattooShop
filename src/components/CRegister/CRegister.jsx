import React from 'react';
import { useState } from 'react';
import { CInput } from '../CInput/CInput.jsx';
import { RegisterUser } from '../../services/apiCalls.js';
import { useNavigate } from 'react-router-dom';
import './CRegister.css';

export const CRegister = () => {
	const navigate = useNavigate();

	const [credentials, setCredentials] = useState({
		email: '',
		password_hash: '',
	});
	const handleChange = (e) => {
		console.log('HandleChange');
		setCredentials((prevState) => ({
			//prev State gets the initial value of the credentials variable
			...prevState,
			[e.target.name]: e.target.value, //la propiedad [] es dinamica
		}));
	};
	async function register() {
		try {
			console.log(credentials);
			const response = await RegisterUser(credentials); // guarda la repsuesta en una variale

			if (response.success) {
				navigate('/login');
			} else {
				alert(response.message);
			}
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className='reg-container'>
			<h1>¡Sign up!</h1>
			<h3>Create an account to start enjoying our services.</h3>
			<div>
				<CInput
					className='reg-input'
					type='email'
					name='email'
					placeholder='example@example.com'
					emitFunction={handleChange}
				/>
			</div>
			<div>
				<CInput
					className='reg-input'
					type='password'
					name='password_hash'
					placeholder='Your password must be 8 - 12 characters long'
					emitFunction={handleChange}
				/>
			</div>
			<CInput
				className='reg-button'
				type='button'
				name='r-button'
				value='Register'
				clickFunction={register}
			/>
		</div>
	);
};
