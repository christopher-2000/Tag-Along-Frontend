// Welcome.jsx

import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import './styles/Welcome.css'
import ImageContainer from '../components/ImageContainer';
import NavigationBar from '../components/NaviagationBar';
import { Button } from '../components/CustomButton';
import ParticlesBackground from './Particles';

const Welcome = () => {

    return (
            <>
            <header>
            <div className='particles'>
                <ParticlesBackground />
            </div>
            
            <NavigationBar />

            <div className='inline'>
                <div className='grid-item'>
                    <h1>TAG ALONG..</h1>
                    <h2>Affordable Rides and make new Friends</h2>

                    <div className='inline-200'>
                        <NavLink to={'/login'} >
                            <Button text={'LOGIN'} color={'orange'} />
                        </NavLink>

                        <NavLink to={'signup'}>
                            <Button text={'SIGNUP'} color={'orange-inverse'} />
                        </NavLink>
                    </div>
                    
                </div>

                <div className='grid-item'>
                        <img src="/bluecar.png" alt="" />
                </div>

            </div>
        
        </header>

        <section className='inline'>
            helloooo
        </section>
        </>
    );
};

export default Welcome;
