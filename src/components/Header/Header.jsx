import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CSurfer } from '../CSurfer/CSurfer';
import '../Header/Header.css';

export const Header = () => {
	const navigate = useNavigate();
	const passport = JSON.parse(localStorage.getItem('passport'));
	let token = passport?.token;

	const handleLogout = () => {
		localStorage.removeItem('passport');
		navigate('/');
	};

	return (
		<>
			<div className='flex justify-space-betwwen'>
				<CSurfer
					path='/'
					content='Home'
				/>
				<CSurfer
					path='/register'
					content='Register'
				/>
				<CSurfer
					path='/login'
					content='Login'
				/>
				<CSurfer
					path='/profile'
					content='Profile'
				/>
				<CSurfer
					path='/appointments'
					content='Appointments'
				/>
				<div
					onClick={handleLogout}>
					{' '}
					Logout
				</div>
			</div>
		</>
	);
};
