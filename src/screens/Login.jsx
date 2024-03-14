import React, { useState } from 'react';
import { Link } from "react-router-dom";

import InputField from '../components/InputField';
import '../App.css'; 
import ImageContainer from '../components/ImageContainer';
import './styles/login.css'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle login goes here
        console.log(email, password);
    };

    return (
        <div className="container">
            <ImageContainer />
            <div className="sub-container">
        <h1>TAG ALONG..</h1>
        <h2>Login</h2>
        <div className="form-box">
          
          <form onSubmit={handleSubmit}>
            <InputField type={'email'} />
            <InputField type={'password'} />
            <button type="submit">LOGIN</button>
          </form>
          <p>
            Forgot Your password? <Link to="/reset">Click here</Link>
          </p>
        </div>
        <p>
          Don't have an Account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
