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
			<div className='services-container'>
				<div className='table-row'>
					<h2 className='title'>Service</h2>
					<h2 className='title'>Description</h2>
					<h2 className='title'></h2>
				</div>
				{services.length &&
					services.map((service, index) => {
						return (
							<div
								className='table-row'
								key={service.id}>
								<div className='content'>{service.service_name}</div>
								<div className='content'>{service.description}</div>
								<div><img className='img' src={service.image_url}></img></div>
								
							</div>
						);
					})}
			</div>
		</>
	);
};
