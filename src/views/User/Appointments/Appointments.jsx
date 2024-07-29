import React, { useEffect, useState } from 'react';
import { CInput } from '../../../components/CInput/CInput';
import { createAppointment, getAllServices } from '../../../services/apiCalls';
import { useNavigate } from 'react-router-dom';
import '../Appointments/GetAnDeleteApp.css';

export const Appointments = () => {
	const [newAppointment, setNewAppointment] = useState({
		service_id: '',
		appointment_date: '',
	});
	const [services, setServices] = useState([]);
	const passport = JSON.parse(localStorage.getItem('passport'));
	const token = passport.token;
	const navigate = useNavigate();

	useEffect(() => {
		const fetchServices = async () => {
			try {
				const result = await getAllServices(token);
				if (result.success) {
					setServices(result.data);
				} else {
					console.error('Error fetching services:', result.message);
				}
			} catch (error) {
				console.error('Error fetching services:', error);
			}
		};

		fetchServices();
	}, [token]);

	useEffect(() => {
		console.log('New Appointment State:', newAppointment);
	}, [newAppointment]);

	const inputHandler = (e) => {
		const { name, value } = e.target;
		setNewAppointment((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const todayFullTimeString = new Date()
		.toISOString()
		.slice(0, new Date().toISOString().lastIndexOf(':'));

	const handleSendAppointment = async () => {
		try {
			const result = await createAppointment(newAppointment, token);
			if (result.success) {
				console.log(result);
				navigate('/myappointments');
			} else {
				console.error('Error creating appointment:', result.message);
			}
		} catch (error) {
			console.error('Error creating appointment:', error);
		}
	};

	return (
		<div className='container'>
			<input className='input'
				type='datetime-local'
				min={todayFullTimeString}
				value={newAppointment.appointment_date}
				name='appointment_date'
				onChange={inputHandler}
			/>

			<select className='app-select'
				name='service_id'
				value={newAppointment.service_id}
				onChange={inputHandler}>
				<option
					disabled
					hidden
					value=''>
					Please choose...
				</option>
				{services.map((service) => (
					<option
						key={service.id}
						value={service.id}>
						{service.service_name}
					</option>
				))}
			</select>

			<div>
				<CInput className='button'
					type='button'
					value='Create'
					clickFunction={handleSendAppointment}
				/>
			</div>
		</div>
	);
};
