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
import CreateRide from "./CreateRide";
import { RidesContext } from "../../context/RidesContext";
import CustomCard from "../../components/CustomCard";

export default function Dashboard() {
    const { user, logout } = useContext(AuthContext);
    const {fetchRecentRides, recentRides} = useContext(RidesContext)

    const handleLogout = () => {
        // Call the logout function from AuthContext
        logout();
    };

    useEffect(() => {
        fetchRecentRides();
      }, []);

    return (
        <>
        <div className="dashboard-container city-background"> {/* Apply inline styles */} 
            <h2 style={{fontWeight:'bold', color:'white'}}>Dashboard</h2> 
            <br/><br/><br/>
            <div className="search-box">
                <h3 style={{fontWeight:'bold'}}>Search for a Ride</h3>
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

        {/* <div className="dashboard-container">
            <h2 style={{fontWeight:'bold'}}>Search Results</h2>

            <br/><br/>
            

        </div> */}
        
        <div className="dashboard-container inline">
            <CustomCard 
                imageSrc={'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_698/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png'}
                title={'Driver Portal'}
                description={'Checkout Driver Portal to create rides and seamlessly track requests'}
                to={'driver'}
                />
            <CustomCard 
                imageSrc={'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_698/v1696243800/assets/62/3b076a-3406-4f3b-89de-2cf1a2ccb907/original/uber-one.jpg'}
                title={'Passenger Portal'}
                description={'Track your requests view your ride history'}
                to={'passenger'}
                />
        </div>
        

        <div className="dashboard-container">
            <h2 style={{fontWeight:'bold'}}>Most Recent Rides</h2>

            {recentRides.length !== 0 && recentRides.slice().reverse().map(ride => (
                <RideListView key={ride.id} id={ride.id} data={ride} />
            ))}

        </div>
        

        <div className="button-absolute-bottom-right">
            <CreateRide />
        </div>
        </>
        
    );
}

