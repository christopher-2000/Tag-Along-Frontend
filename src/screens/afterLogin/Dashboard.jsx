import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
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

export default function Dashboard() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Call the logout function from AuthContext
        logout();
    };

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
                        <TextField id="outlined-basic" label="From" variant="outlined" fullWidth />
                    </div>
                    
                    <SyncAltIcon style={{ margin: '0px 10px' }} />

                    <div className="item">
                        <TextField id="outlined-basic" label="To" variant="outlined" fullWidth />
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
        

        <button onClick={() => navigate('create-ride')} className="button-absolute-bottom-right iceblue-back">+ Create Ride</button>
        </>
        
    );
}

