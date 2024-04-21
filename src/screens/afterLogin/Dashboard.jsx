import React, { useState, useContext, useRef, useEffect } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { useLoadScript, Autocomplete } from '@react-google-maps/api';
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import SyncAltIcon from '@mui/icons-material/SyncAlt';


import { TextField, Button, Grid, Typography, IconButton, InputAdornment } from '@mui/material';

import './styles/dashboard.css'
import { Height } from "@mui/icons-material";
import RideListView from "../../components/RideListView";
import CreateRide from "./CreateRide";

export default function Dashboard() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const fromInputRef = useRef();
    const toInputRef = useRef();

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Using Vite's env variable syntax
        libraries: ['places'],
    });
    

    const handleFromChange = (event) => {
        setFrom(event.target.value);
    };

    const handleToChange = (event) => {
        setTo(event.target.value);
    };

    const handleLogout = () => {
        // Call the logout function from AuthContext
        logout();
    };

    const handleFromPlaceChanged = () => {
        if (fromInputRef.current) {
            const place = fromInputRef.current.getPlace();
            setFrom(place.formatted_address || place.name);
        }
    };

    const handleToPlaceChanged = () => {
        if (toInputRef.current) {
            const place = toInputRef.current.getPlace();
            setTo(place.formatted_address || place.name);
        }
    };

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <>
        <div className="dashboard-container city-background"> {/* Apply inline styles */} 
            <h2 style={{fontWeight:'bold', color:'white'}}>Dashboard</h2> 
            <br/><br/><br/>
            <div className="search-box">
                <h5>Where do you wanna go {user!=null && user.username} ? </h5>

                <br/>
                <div className="search-container">
                        <div className="item">
                            <Autocomplete
                                onLoad={(autoC) => fromInputRef.current = autoC}
                                onPlaceChanged={handleFromPlaceChanged}
                            >
                                <TextField 
                                    id="from"
                                    label="From"
                                    variant="outlined"
                                    fullWidth
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                />
                            </Autocomplete>
                        </div>
                    
                    <SyncAltIcon style={{ margin: '0px 10px' }} />


                   <div className="item">
                            <Autocomplete
                                onLoad={(autoC) => toInputRef.current = autoC}
                                onPlaceChanged={handleToPlaceChanged}
                            >
                                <TextField 
                                    id="to"
                                    label="To"
                                    variant="outlined"
                                    fullWidth
                                    value={to}
                                    onChange={(e) => setTo(e.target.value)}
                                />
                            </Autocomplete>
                        </div>

                    
                    
                    
                    
                    <div className="item">
                        <DatePicker label='Date of Travel'  fullWidth />
                    </div>

                    <div className="item">
                        <button>Search Rides</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="dashboard-container">
            <h2 style={{fontWeight:'bold'}}>Search Results</h2>

            <br/><br/>
            <RideListView />
            <RideListView />
            <RideListView />
        </div>
        <div className="dashboard-container">
            <h2 style={{fontWeight:'bold'}}>Most Recent Rides</h2>

            <br/><br/>
            <RideListView />
            <RideListView />
            <RideListView />
        </div>
        

        <div className="button-absolute-bottom-right">
            <CreateRide />
        </div>
        </>
        
    );
}

