import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../Login/Login.jsx';
import { Home } from '../Home/Home.jsx'
import { NotFound } from '../../components/NotFound/Notfound.jsx'
import { Register } from '../Register/Register.jsx'
import { Profile } from '../Profile/Profile.jsx'

export const Body = () => {
  return (
    <>
    <Routes>
        <Route path="*" element={<NotFound/> }/>
        <Route path="/" element={<Home/> }/>
        <Route path="/login" element={<Login/> }/>
        <Route path="/register" element={<Register/> }/>
        <Route path="/profile" element={<Profile/>}/>

    </Routes>
    </>
  )
}
