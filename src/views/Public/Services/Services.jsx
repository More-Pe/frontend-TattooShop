import React, { useEffect, useState } from 'react';
import './Services.css';
import { getAllServices } from '../../../services/apiCalls';

export const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		const bringAllServices = async () => {
			const allServices = await getAllServices();
			if (allServices.success) {
				setServices(allServices.data);
			}
		};
		bringAllServices();
	}, []);

	return (
		<>
			<h1>Services</h1>
			<div className='services-container'>
				<div className='table-row'>
					<div className='content'>SERVICE</div>
					<div className='content'>DESCRIPTION</div>
				</div>
				{services.length &&
					services.map((service, index) => {
						return (
							<div
								className='table-row'
								key={service.id}>
								<div className='content'>{service.service_name}</div>
								<div className='content'>{service.description}</div>
							</div>
						);
					})}
			</div>
		</>
	);
};
