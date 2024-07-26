import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../Public/Login/Login.jsx';
import { Home } from '../Public/Home/Home.jsx';
import { NotFound } from '../../components/NotFound/Notfound.jsx';
import { Register } from '../Public/Register/Register.jsx';
import { Profile } from '../User/Profile/Profile.jsx';
import { Appointments } from '../User/Appointments/Appointments.jsx';
import { SuperAdmin } from '../SuperAdmin/SuperAdmin.jsx';

export const Body = () => {
	const passport = JSON.parse(localStorage.getItem('passport'));
	let role_id = null;
	if(passport){
	  role_id = passport.tokenData.role_id
	}
	return (
		<>
			<Routes>
				<Route
					path='*'
					element={<NotFound />}
				/>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/register'
					element={<Register />}
				/>
				<Route
					path='/profile'
					element={<Profile />}
				/>
				<Route
					path='/appointments'
					element={<Appointments />}
				/>
				{role_id === 1 && (
					<Route
						path='/superadmin'
						element={<SuperAdmin />}
					/>
				)}
			</Routes>
		</>
	);
};
