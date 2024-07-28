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
{!isLoggedIn && (
                    <>
                        <CSurfer
                            path='/login'
                            content='Login'
                        />
                        <CSurfer
                            path='/register'
                            content='Register'
                        />
						                        <CSurfer
                            path='/services'
                            content='Services'
                        />
                    </>
                )}
				  {isLoggedIn && (
                    <>
                        <CSurfer
                            path='/profile'
                            content='Profile'
                        />
                    				<div
					onClick={handleLogout}>
					{' '}
					Logout
				</div>
				<CSurfer
					path='/appointments'
					content='Appointments'
				/>
                    </>
                )}
				{role_id === 1 && (
                    <CSurfer
                        path='/superadmin'
                        content='SuperAdmin'
                    />)}
			</div>
		</>
	);
};