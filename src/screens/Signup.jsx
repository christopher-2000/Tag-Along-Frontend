// signup.jsx

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import ImageContainer from '../components/ImageContainer';
import './styles/signup.css'
import InputField from '../components/InputField';


const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFullNameChange = (e) => setFullName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle signup goes here
        console.log(fullName, email, password);
    };

    return (
        <div className="container">
            <ImageContainer />
            <div className="sub-container">
                <h1>TAG ALONG..</h1>
                <h2>Signup</h2>
                <div className="form-box">
                    <form onSubmit={handleSubmit}>
                        <InputField type={'username'} />
                        <InputField type={'email'} />
                        <InputField type={'password'} />
                        <button type="submit">SIGNUP</button>
                    </form>
                    <p>
                        Already have an Account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
