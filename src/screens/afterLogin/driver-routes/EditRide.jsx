import { Autocomplete, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import React, { useState } from 'react';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

//import './styles/createride.css'
//import './styles/dashboard.css'
//import BackButton from '../../components/BackButton';

import Modal from '@mui/material/Modal';


export default function EditRide() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <div>
      <button onClick={handleOpen}  className="button-centralized"><h4 className='bold'>Edit Ride</h4></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{margin:'5%',overflow:'auto'}}
      >
        <div className='createrideform' style={{backgroundColor:'white'}}>

          <h2 style={{fontWeight:'bold'}}>Edit Ride</h2>

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
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    sx={{width:'100%',m:1}}
                    options={['Suzuki','dodge']}
                    renderInput={(params) => <TextField {...params} label="Vehicle" />}
                  />

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

              <div>
                <h5 style={{fontWeight:'bold'}}>Passengers</h5>
              </div>
              
              <div className='inline-200'>
                <button style={{margin:'1%'}} onClick={handleClose} className='secondaryblue-back'>CANCEL</button>
                <button style={{margin:'1%'}} type="submit">EDIT</button>
              </div>

          </form>
          </div>
      </Modal>
    </div>
  );
}