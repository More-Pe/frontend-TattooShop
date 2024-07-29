import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getProfile, updateProfile } from '../../../services/apiCalls.js';
import { CInput } from "../../../components/CInput/CInput.jsx";
import "./Profile.css"

export const Profile = () => {
  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  })

  const [editData, setEditData] = useState({
    first_name: "",
    last_name: "",
    email: ""
  })
  const [editing, setEditing] = useState(false); 

  const passport = JSON.parse(localStorage.getItem("passport"));
  
  let token;
  const navigate = useNavigate();

  useEffect(() => {
    if (!passport) {
      navigate("/login");
    } else {
      const bringProfile = async () => {
        const response = await getProfile(passport.token);
        setProfileData(response.data);
        console.log(response);
      }
      bringProfile();
    }
  }, [])

  const editButtonHandler = () => {
    setEditData({
      first_name: profileData.first_name,
      last_name: profileData.last_name,
      email: profileData.email
    })
    setEditing(!editing)
  }

  const editInputHandler = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    })
    console.log("Editing the input", editData)
  }

  const confirmButtonHandler = async () => {
    try {
      const response = await updateProfile(editData, passport.token)
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
    navigate(0); 
  }
}

  return (
    <div className='prof-container'>
    <h2 className={editing ? "hidden" : ""}>
      First name: {profileData.first_name ? profileData.first_name : "N/A"}
    </h2>
    <CInput
      type="text"
      name="first_name"
      placeholder="First name: "
      className={editing ? "prof-input" : "hidden"}
      emitFunction={editInputHandler}
    />
     <h2 className={editing ? "hidden" : ""}>
      Last name: {profileData.last_name ? profileData.last_name : "N/A"}
    </h2>
    <CInput
      type="text"
      name="last_name"
      placeholder="Last name: "
      className={editing ? "prof-input" : "hidden"}
      emitFunction={editInputHandler}
    />
    
    <h2 className={editing ? "hidden" : ""}>Email: {profileData.email}</h2>
    <CInput
      type="email"
      name="email"
      placeholder={editData.email}
      className={editing ? "prof-input" : "hidden"}
      emitFunction={editInputHandler}
    />
    <CInput className='prof-button'
      type="button"
      name="Edit"
      value={editing ? "Cancel" : "Edit"}
      clickFunction={editButtonHandler}
    />
    <CInput
      type="button"
      name="send"
      value="Save"
      className={editing ? "prof-button" : "hidden"}
      clickFunction={confirmButtonHandler}
    />
  </div>
);
};