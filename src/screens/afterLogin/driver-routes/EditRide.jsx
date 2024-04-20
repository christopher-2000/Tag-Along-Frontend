import { Autocomplete, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import React, { useContext, useState } from 'react';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import dayjs from 'dayjs';

//import './styles/createride.css'
//import './styles/dashboard.css'
//import BackButton from '../../components/BackButton';

import Modal from '@mui/material/Modal';
import { Edit } from '@mui/icons-material';
import { RidesContext } from '../../../context/RidesContext';
import CustomSnackbar from '../../../components/SnackBar';


export default function EditRide({data}) {
  const [openSnack, setOpenSnack] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success'); // Default to success

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const {editRide, changeRefreshRides} = useContext(RidesContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can implement the logic to post the ride data to your backend or handle it as needed
    const success = await editRide(data.id ,formData)
      if(success) {
        handleClose();
        setSeverity('success');
        setMessage('Success! Your Ride was Updated successfully.');
        setOpenSnack(true);
        changeRefreshRides(true);
      }
      if(!success){
        console.log('Something went wrong:');
        setSeverity('error');
        setMessage('Error! Something went wrong.');
        setOpenSnack(true);
      }
    console.log(formData);
  };

  return (
    <div>
      <button style={{margin:'5px'}} onClick={handleOpen} className='iconbutton editicon'><Edit /></button>
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
                  
                  <TextField id="outlined-basic" label="From" name="from" variant="outlined" defaultValue={data.from} onChange={handleChange} fullWidth />
                  

                  <SyncAltIcon style={{ margin: '10px 10px' }} />

                  
                  <TextField id="outlined-basic" label="To" name="to" variant="outlined" defaultValue={data.to} onChange={handleChange} fullWidth />
                  
              </div>
              
              <div className='responsive-inline'>
                <DatePicker name='date' label='Date of Travel' defaultValue={dayjs(data.date)} onChange={(date) => handleChange({target: { name: "date", value: date }})}  fullWidth required />
                <TimePicker name='departingTime' label='Departing Time' defaultValue={dayjs(data.date + 'T' + data.startTime)} onChange={(departingtime) => handleChange({target: { name: "departingTime", value: departingtime }})}  fullWidth required />
                <TimePicker name='arrivalTime' label='Arrival Time' defaultValue={dayjs(data.date + 'T' + data.endtime)} onChange={(arrivaltime) => handleChange({target: { name: "arrivalTime", value: arrivaltime }})}  fullWidth required />                  
              </div>
              
              <div className='responsive-inline'>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    sx={{width:'100%',m:1}}
                    options={['Suzuki','dodge']}
                    defaultValue={'Suzuki'}
                    renderInput={(params) => <TextField {...params} label="Vehicle" name="vehicle" />}
                    onChange={(event, value) => setFormData(prevState => ({
                      ...prevState,
                      vehicle: value
                    }))}
                  />

                  <TextField
                      label="No of seats"
                      id="outlined-start-adornment"
                      sx={{ m: 1 }}
                      defaultValue={data.seats}
                      onChange={handleChange}
                      name='seats'
                  />

                  <TextField
                      label="Price /head"
                      id="outlined-start-adornment"
                      sx={{ m: 1}}
                      InputProps={{
                          startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      }}
                      defaultValue={data.price}
                      onChange={handleChange}
                      name="pricePerHead"
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
      <CustomSnackbar
        open={openSnack}
        setOpen={setOpenSnack}
        message={message}
        severity={severity}
      />
    </div>
  );
}