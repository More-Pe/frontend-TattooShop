import React, { useEffect, useState } from 'react';
import { deleteUserById, getAllUsers } from '../../services/apiCalls';
import '../SuperAdmin/SuperAdmin.css';
import { CInput } from '../../components/CInput/CInput.jsx';

export const SuperAdmin = () => {
	const [users, setUsers] = useState([]);
	const passport = JSON.parse(localStorage.getItem('passport'));
	const token = passport.token;

	useEffect(() => {
		const bringAllUsers = async () => {
			const allUsers = await getAllUsers(token);
			if (allUsers.success) {
				setUsers(allUsers.data);
			}
		};
		bringAllUsers();
	}, []);

	const deleteUserHandler = async (e) => {
		const id = +e.target.name;
		const res = await deleteUserById(token, id);
		if (res.success) {
			const resUsers = users.filter((user) => {
				if (user.id !== id) return user;
			});
			setUsers(resUsers);
		}
	};

	return (
		<>
			<div className='users-container'>
				<div className='table-row'>
					<h2 className='title'>ID</h2>
					<h2 className='title'>EMAIL</h2>
					<h2 className='title'>NAME</h2>
					<h2 className='title'>DELETE</h2>
				</div>
				{users.length &&
					users.map((user, index) => {
						return (
							<div
								className='table-row'
								key={user.id}>
								<div className='content'>{user.id}</div>
								<div className='content'>{user.email}</div>
								<div className='content'>
									{user.first_name ? user.first_name : 'No unavailable'}
								</div>
								<div>
									<CInput className='button'
										type='button'
										name={user.id}
										value='⊘'
										clickFunction={deleteUserHandler}
									/>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};

//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos-premium%2Fgato-trepando-arbol-palabra-felino-el_43290389.htm&psig=AOvVaw0mYmirveRaMz71S5ehUxAO&ust=1722335761160000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJC4zOuGzIcDFQAAAAAdAAAAABAE
