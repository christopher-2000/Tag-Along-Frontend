import { InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import React, { useState } from 'react';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

import './styles/createride.css'
import './styles/dashboard.css'
import BackButton from '../../components/BackButton';

const CreateRide = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    seats: '',
    fuelPrice: '',
    pricePerHead: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to post the ride data to your backend or handle it as needed
    console.log(formData);
  };

  return (
    <div className='dashboard-container'>
    
        <BackButton />
        
        <br /><br />
        
        <div className='createrideform'>

            <h2 style={{fontWeight:'bold'}}>Create Ride</h2>
        
            <form onSubmit={handleSubmit}>
                <div className='responsive-inline'>
                    
                    <TextField id="outlined-basic" label="From" variant="outlined" fullWidth />
                    
        
                    <SyncAltIcon style={{ margin: '10px 10px' }} />
        
                    
                    <TextField id="outlined-basic" label="To" variant="outlined" fullWidth />
                    
                </div>
                
                <div className='responsive-inline'>
                    
                        <DatePicker label='Date of Travel'  fullWidth />
                    
                        <TimePicker label='Departing Time'  fullWidth />
                    
                        <TimePicker label='Arrival Time'  fullWidth />
                    
                </div>
                
                <div className='responsive-inline'>
                    <TextField
                        label="No of seats"
                        id="outlined-start-adornment"
                        sx={{ m: 1 }}
                    />

                    <TextField
                        label="Price /head"
                        id="outlined-start-adornment"
                        sx={{ m: 1}}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                </div>

                <button type="submit">POST</button>
            </form>
        </div>
        
    </div>
  );
};

export default CreateRide;
