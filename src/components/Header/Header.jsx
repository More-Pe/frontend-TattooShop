import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CSurfer } from '../CSurfer/CSurfer';
import '../Header/Header.css';

export const Header = () => {
	const navigate = useNavigate();
	const passport = JSON.parse(localStorage.getItem('passport'));
	let role_id = passport?.tokenData?.role_id;
	const isLoggedIn = !!passport;

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
					path='/services'
					content='Services'
				/>
				{!isLoggedIn ? (
					<>
						<CSurfer
							path='/login'
							content='Login'
						/>
						<CSurfer
							path='/register'
							content='Register'
						/>
					</>
				) : (
					<>
						<CSurfer
							path='/profile'
							content='Profile'
						/>
						<CSurfer
							path='/appointments'
							content='Appointments'
						/>
						<div onClick={handleLogout}>Logout</div>
					</>
				)}
				{role_id === 1 && (
					<CSurfer
						path='/superadmin'
						content='SuperAdmin'
					/>
				)}
			</div>
		</>
	);
};
