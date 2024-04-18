import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IonIcon } from '@ionic/react';
import { calendar, calendarOutline } from 'ionicons/icons';
import { Autocomplete, TextField } from '@mui/material';
import { RidesContext } from '../../context/RidesContext';
import CustomSnackbar from '../../components/SnackBar';


export default function RideRequest({data}) {
    const [openSnack, setOpenSnack] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('success'); // Default to success

    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {createRideRequest} = React.useContext(RidesContext)
  
  const [formData, setFormData] = React.useState({
    seats : '',
    comments:'',
    ride:data.id
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

    
    const success = await createRideRequest(formData)
    if(success) {
        handleClose();
        setSeverity('success');
        setMessage('Success! Your Ride Request was created successfully.');
        setOpenSnack(true);
      }
      if(!success){
        console.log('Something went wrong:');
        setSeverity('error');
        setMessage('Error! Something went wrong.');
        setOpenSnack(true);
      };
        
  } 

  return (
    <div>
      <button onClick={handleOpen} ><h5 style={{marginBottom:'0px'}}>TAG ALONG</h5></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{margin:window.innerWidth < 700 ?'2% 5%':'2% 20%',overflow:'auto'}}
      >
        <div style={{backgroundColor:'white', padding:'2%',borderRadius:'10px'}}>
            <h2 style={{fontWeight:'bold'}}>Request to Tag Along</h2>
            <br />
            <div className='inline'>
                
                <h4 style={{alignItems:'center'}}><IonIcon icon={calendarOutline}/> {data.date} | RideID #{data.id}</h4>
            </div>

            <br />
            <div className='center'>
                <div className='fromto center'>
                    <div className='from center' style={{width:'fit-content'}}>
                        <h5 className='bold'>{data.startTime}</h5>
                        <h5>{data.from}</h5>
                    </div>
                    <div className='duration center'>
                        <h6>{data.duration.hours}H {data.duration.minutes}M</h6>
                        <h5>{"--->"}</h5>
                    </div>
                    <div className='to center' style={{width:'fit-content'}}>
                        <h5 className='bold'>{data.endtime}</h5>
                        <h5>{data.to}</h5>
                    </div>
                </div>
                
                <br /><br />

                <div style={{width:'100%',margin:'2%'}} className='inline-200'>

                    <div className='drivercar center'>
                    <h5 className='bold'>Driver & Car</h5>
                        <h5>{data.driver}</h5>
                        <h5>{data.car}</h5>
                    </div>

                    <div className='noofSeat center'>
                        <h5 className='bold'>Vacant Seats</h5>
                        <h5>{data.seats}</h5>
                    </div>

                    <div className='Rate/Head center'>
                        <h5 className='bold'>Rate</h5>
                        <h5 className='price'>${data.price} /head</h5>
                    </div>
                </div>
                
                <form id='riderequest' onSubmit={handleSubmit}>
                    <div className='responsive-inline'>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            sx={{width:'100%'}}
                            options={['1','2','3']}
                            onChange={(event, value) => setFormData(prevState => ({
                                ...prevState,
                                seats: value
                              }))}
                            
                            renderInput={(params) => <TextField {...params} name='seats' label="Requested No.of Seats" />}
                        />
                        <TextField
                            label="Additional Comments"
                            id="outlined-start-adornment"
                            sx={{ m: 1 }}
                            name='comments'
                            onChange={handleChange}
                            fullWidth
                        />
                    </div>

                    <div className='inline-200'>
                        <button style={{margin:'1%'}} onClick={handleClose} className='secondaryblue-back'>CANCEL</button>
                        <button style={{margin:'1%'}}  type="submit">REQUEST</button>
                    </div>
                </form>
              
            </div>
                
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