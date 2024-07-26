import React from 'react'
import { useEffect } from 'react'
import { CInput } from '../../components/CInput/CInput'
import { useState } from 'react'

export const Appointments = () => {
    const [appointments, setAppointments] = useState([])
    const [newAppointment, setNewAppointment] = useState({
        user_id: '', //este viene del token
        service_id: '', //el servicio lo elegiré en un desplegable
        appointment_date: '' //date lo sacaremos de un input type='date' (y opcionalmente input type='time')
    })

    useEffect(()=> {
        //getMyAppointments (token)
        console.log("tenemos app");
    },[])
    const todayString = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"))
  return (
    <>
    <div>
        {/* <CInput type="date" />
        <CInput type="date" /> */}
        <CInput type="datetime-local" value={newAppointment.value} name="date" />
    </div>
    </>
  )
}
