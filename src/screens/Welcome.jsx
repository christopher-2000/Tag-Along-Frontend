// Welcome.jsx

import React from 'react';
import { Link } from "react-router-dom";
import '../App.css'; 
import ImageContainer from '../components/ImageContainer';
import './styles/welcome.css'

const Welcome = () => {
    return (
        <div className="container">
            <ImageContainer />
            <div className="sub-container">
                <h1>TAG ALONG..</h1>
                <h2>Affordable rides & Make new friends</h2>
                
                    <Link to="/login" className="login-button">LOGIN</Link>
                    <Link to="/signup" className="signup-button">SIGNUP</Link>
                
            </div>
        </div>
    );
};

export default Welcome;
