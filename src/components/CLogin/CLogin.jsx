import React, { useState } from 'react';
import { CInput } from '../CInput/CInput.jsx';
import { LoginUser } from '../../services/apiCalls.js';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import './CLogin.css';

export const CLogin = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: '',
        password_hash: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setCredentials((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    function validateEmail(email) {
        // Regex for validating email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Invalid email format';
        }
        // Check the length of the email
        if (email.length < 8 || email.length > 12) {
            return 'Email must be between 8 and 12 characters';
        }
        return '';
    }

    async function login() {
        // Reset errors
        setErrors({
            email: '',
            password: '',
        });

        // Validate email and password
        const emailError = validateEmail(credentials.email);
        const passwordError = credentials.password_hash.length < 8 || credentials.password_hash.length > 12
            ? 'Password must be between 8 and 12 characters'
            : '';

        if (emailError || passwordError) {
            setErrors({
                email: emailError,
                password: passwordError,
            });
            return;
        }

        try {
            const response = await LoginUser(credentials);
            if (response.success) {
                const decodedToken = jwtDecode(response.token);
                const passport = {
                    token: response.token,
                    tokenData: decodedToken,
                };
                localStorage.setItem('passport', JSON.stringify(passport));
                navigate('/profile');
            } else {
                alert(response.message); // Display error message from backend
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='log-container'>
            <h1>Welcome back!</h1>
            <h3>Please log in to your account to view or book your appointments.</h3>
            <div>
                <CInput
                    className='log-input'
                    type='email'
                    name='email'
                    placeholder='Put your email'
                    emitFunction={handleChange}
                />
                {errors.email && <p className='error-message'>{errors.email}</p>}
            </div>
            <div>
                <CInput
                    className='log-input'
                    type='password'
                    name='password_hash'
                    placeholder='Put your password'
                    emitFunction={handleChange}
                />
                {errors.password && <p className='error-message'>{errors.password}</p>}
            </div>
            <CInput
                className='log-button'
                type='button'
                name='button'
                value='Login'
                clickFunction={login}
            />
        </div>
    );
};
