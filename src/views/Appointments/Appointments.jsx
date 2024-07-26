import React from 'react'
import { useEffect, useState } from 'react'
import { CInput } from '../../components/CInput/CInput'

export const Appointments = () => {
    const [Appointments, setAppointments] = useState([])
    const [newAppointment, setNewAppointment] = useState({
        service_id: "",
        appointment_date: ""
    })

    useEffect((e)=> {
        console.log(1);
        //getMyAppointments (token)
        console.log(newAppointment);
    },[newAppointment])
    
    const inputHandler = (e) => {
        const keyToUpdate = e.target.name
        
        setNewAppointment({
            ...newAppointment,
            [keyToUpdate]: e.target.value
        })
    }
    
    const services = [{id:1, serviceName: "tattoo"}, {id:2, serviceName: "remove tattoo"}]

    const todayFullTimeString = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"))



  return (
    <>
    <div>
        <input type="datetime-local" min={todayFullTimeString} value={newAppointment.date} name="date" onChange={(e) => inputHandler(e)}/>
        
        <select defaultValue="" onChange={inputHandler}>
        <option disabled hidden value="">Please choose...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
    </div>
    </>
  )
}
