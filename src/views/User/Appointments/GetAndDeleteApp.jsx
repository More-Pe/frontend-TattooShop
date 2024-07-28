import React, { useEffect, useState } from 'react';
import { deleteAppointment, getMyAppointments } from '../../../services/apiCalls.js'
import { CInput } from '../../../components/CInput/CInput.jsx'
import { format } from 'date-fns';

export const GetAndDeleteApp = () => {
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState(null);
    const passport = JSON.parse(localStorage.getItem('passport'));
    const token = passport.token;

    useEffect(() => {
        const bringAllAppointments = async () => {
            try {
                const allAppointments = await getMyAppointments(token);
                if (allAppointments.success) {
                    setAppointments(allAppointments.data);
                } else {
                    setError(allAppointments.message);
                }
            } catch (err) {
                setError('Failed to fetch appointments');
            }
        };
        bringAllAppointments();
    }, [token]);

    const deleteAppointmentHandler = async (e) => {
        const id = +e.target.name;
        try {
            const res = await deleteAppointment(token, id);
            if (res.success) {
                const resAppointments = appointments.filter((appointment) => appointment.id !== id);
                setAppointments(resAppointments);
            } else {
                setError(res.message);
            }
        } catch (err) {
            setError('Failed to delete appointment');
        }
    };

    const formatDate = (dateString) => {
        return format(new Date(dateString), 'dd/MM/yyyy HH:mm') + ' hs';
    };

    return (
        <>
            <h1>Get And Delete Appointments</h1>
            {error && <div className='error-message'>{error}</div>}
            {appointments.length === 0 ? (
                <div className='no-appointments-message'>You don't have any appointments yet</div>
            ) : (
                <div className='appointments-container'>
                    <div className='table-row'>
                        <div className='content'>DATE</div>
                        <div className='content'>SERVICE NAME</div>
                        <div className='content'>ACTIONS</div>
                    </div>
                    {appointments.map((appointment) => (
                        <div className='table-row' key={appointment.id}>
                            <div className='content'>{formatDate(appointment.appointment_date)}</div>
                            <div className='content'>{appointment.service.service_name}</div>
                            <div className='content'>
                                <CInput
                                    type='button'
                                    name={appointment.id}
                                    value='⊘'
                                    clickFunction={deleteAppointmentHandler}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};