import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../Public/Login/Login.jsx';
import { Home } from '../Public/Home/Home.jsx';
import { NotFound } from '../../components/NotFound/Notfound.jsx';
import { Register } from '../Public/Register/Register.jsx';
import { Profile } from '../User/Profile/Profile.jsx';
import { Appointments } from '../User/Appointments/Appointments.jsx';

export const Body = () => {
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
			</Routes>
		</>
	);
};
