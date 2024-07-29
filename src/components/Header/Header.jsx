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
	  <div className='header-container'>
		<CSurfer className='nav-item'
		  path='/'
		  content='Home'
		/>
		<CSurfer className='nav-item'
		  path='/services'
		  content='Services'
		/>
		{!isLoggedIn ? (
		  <>
			<CSurfer className='nav-item'
			  path='/login'
			  content='Login'
			/>
			<CSurfer className='nav-item'
			  path='/register'
			  content='Register'
			/>
		  </>
		) : (
		  <>
			<CSurfer className='nav-item'
			  path='/profile'
			  content='Profile'
			/>
			<CSurfer className='nav-item'
			  path='/appointments'
			  content='Appointments'
			/>
			<CSurfer className='nav-item'
			  path='/myappointments'
			  content='My Appointments'
			/>
			<div className='logout' onClick={handleLogout}>Logout</div>
		  </>
		)}
		{role_id === 1 && (
		  <CSurfer className='nav-item'
			path='/superadmin'
			content='SuperAdmin'
		  />
		)}
	  </div>
	);
  };