import { Autocomplete, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import React, { useContext, useState } from 'react';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

import './styles/createride.css'
import './styles/dashboard.css'
import BackButton from '../../components/BackButton';

import Modal from '@mui/material/Modal';
import { RidesContext } from '../../context/RidesContext';
import CustomSnackbar from '../../components/SnackBar';


export default function CreateRide() {
  const [openSnack, setOpenSnack] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success'); // Default to success

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { createride } = useContext(RidesContext);

  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: null,
    departingTime: null,
    arrivalTime: null,
    vehicle: '',
    seats: '',
    pricePerHead: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {                                                                 
    e.preventDefault();                                                                                
    // Here you can implement the logic to post the ride data to your backend or handle it as needed  
      
      const success = await createride(formData)
      if(success) {
        handleClose();
        setSeverity('success');
        setMessage('Success! Your Ride was created successfully.');
        setOpenSnack(true);
      }
      if(!success){
        console.log('Something went wrong:');
        setSeverity('error');
        setMessage('Error! Something went wrong.');
        setOpenSnack(true);
      }
  };

  return (
    <div>
      <button onClick={handleOpen}  className="button-centralized iceblue-back"><h2 className='bold'>+ Create Ride</h2></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{margin:'5%',overflow:'auto'}}
      >
        <div className='createrideform' style={{backgroundColor:'white'}}>

          <h2 style={{fontWeight:'bold'}}>Create Ride</h2>

          <form onSubmit={handleSubmit}>
              <div className='responsive-inline'>
                  
                  <TextField id="outlined-basic" label="From" variant="outlined" name='from' onChange={handleChange} fullWidth />
                  

                  <SyncAltIcon style={{ margin: '10px 10px' }} />

                  
                  <TextField id="outlined-basic" label="To" variant="outlined" name='to' onChange={handleChange} fullWidth />
                  
              </div>
              
              <div className='responsive-inline'>
                  
                      <DatePicker name='date' label='Date of Travel' onChange={(date) => handleChange({target: { name: "date", value: date }})}  fullWidth />
                  
                      <TimePicker name='departingTime' label='Departing Time' onChange={(departingtime) => handleChange({target: { name: "departingTime", value: departingtime }})}  fullWidth />
                  
                      <TimePicker name='arrivalTime' label='Arrival Time' onChange={(arrivaltime) => handleChange({target: { name: "arrivalTime", value: arrivaltime }})}  fullWidth />
                  
              </div>
              
              <div className='responsive-inline'>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    sx={{width:'100%',m:1}}
                    options={['Suzuki','dodge']}
                    onChange={(event, value) => setFormData(prevState => ({
                      ...prevState,
                      vehicle: value
                    }))}
                    renderInput={(params) => <TextField {...params} name='vehicle' label="Vehicle" />}
                  />

                  <TextField
                      label="No of seats"
                      id="outlined-start-adornment"
                      sx={{ m: 1 }}
                      name='seats'
                      onChange={handleChange}
                  />

                  <TextField
                      label="Price /head"
                      id="outlined-start-adornment"
                      sx={{ m: 1}}
                      InputProps={{
                          startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      }}
                      name='pricePerHead'
                      onChange={handleChange}
                  />
              </div>
              
              <div className='inline-200'>
                <button style={{margin:'1%'}} onClick={handleClose} className='secondaryblue-back'>CANCEL</button>
                <button style={{margin:'1%'}} type="submit">POST</button>
              </div>

          </form>
          </div>
      </Modal>
      <CustomSnackbar
        open={openSnack}
        setOpen={setOpenSnack}
        message={message}
        severity={severity}
      />
    </div>
  );
}