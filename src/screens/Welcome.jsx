// Welcome.jsx

import React from 'react';
import { Link } from "react-router-dom";


import './styles/Welcome.css'
import ImageContainer from '../components/ImageContainer';
import NavigationBar from '../components/NaviagationBar';
import { Button } from '../components/CustomButton';

const Welcome = () => {
    return (

            <header>
                <NavigationBar />

                <div className='inline'>
                    <div className='grid-item maxw'>
                        <h1>Tag Along..</h1>
                        <h2>Affordable Rides and make new Friends</h2>
                        <div className='inline-200'>
                            
                            <Button text={'LOGIN'} color={'green'} />
                            <Button text={'SIGNUP'} color={'green-inverse'} />
                        </div>
                    </div>
                    <div>
                    <img className='grid-item' src="/car.avif" alt="" />
                    </div>
                    
                </div>

            </header>
    );
};

export default Welcome;
