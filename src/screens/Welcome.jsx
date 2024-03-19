// Welcome.jsx

import React from 'react';
import { Link } from "react-router-dom";

import '../App.css'; 
import ImageContainer from '../components/ImageContainer';
import './styles/welcome.css'
import NavigationBar from '../components/NaviagationBar';

const Welcome = () => {
    return (
        <div className="container">
            <header>
                <NavigationBar />
            </header>

        </div>
    );
};

export default Welcome;
