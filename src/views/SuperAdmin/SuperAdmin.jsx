import React, { useEffect, useState } from 'react';
import { deleteUserById, getAllUsers } from '../../services/apiCalls';
import './SuperAdmin.css';
import { CInput } from '../../components/CInput/CInput.jsx'

export const SuperAdmin = () => {
	const [users, setUsers] = useState([]);
	const passport = JSON.parse(localStorage.getItem('passport'));
	const token = passport.token;

	useEffect(() => {
		const bringAllUsers = async () => {
			const allUsers = await getAllUsers(token);
			console.log(allUsers);
			if (allUsers.success) {
				setUsers(allUsers.data);
			}
		};
		bringAllUsers();
	}, []);

    const deleteUserHandler = async (e) => {
		const id = e.target.name;
		const res = await deleteUserById(token, id);
		console.log(res);
    }

	return (
		<>
			<h1>SuperAdmin</h1>
			<div className='users-container'>
				<div className='table-row'>
					<div className='content'>ID</div>
					<div className='content'>EMAIL</div>
					<div className='content'>ACTIVE?</div>
					<div className='content'>ACTIONS</div>
				</div>
				{users.length &&
					users.map((user) => {
						return (
							<div
								className='table-row'
								key={user.id}>
								<div className='content'>{user.id}</div>
								<div className='content'>{user.email}</div>
								<div className='content'>{user.is_active ? 'Yes' : 'No'}</div>
								<div className='content'>
									<CInput
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