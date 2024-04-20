import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import React, { useContext, useEffect, useState } from 'react';


//import './styles/createride.css'
//import './styles/dashboard.css'
//import BackButton from '../../components/BackButton';

import Modal from '@mui/material/Modal';
import { Edit } from '@mui/icons-material';
import { RidesContext } from '../../../context/RidesContext';
import CustomSnackbar from '../../../components/SnackBar';
import RequestListView from '../../../components/RequestListView';
import { IonIcon } from '@ionic/react';
import { close } from 'ionicons/icons';
import { Close } from 'react-ionicons';
import { Link } from 'react-router-dom';


export default function ViewRequests({data}) {
  const [openSnack, setOpenSnack] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success'); // Default to success

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {rideRequests, fetchRideRequests , refreshRequests, changeRefreshRequests} = useContext(RidesContext)

  useEffect(() => {
    if(open){
      fetchRideRequests(data.id)
    }
  },[open])

  useEffect(() => {
    if(refreshRequests){
      fetchRideRequests(data.id)
      changeRefreshRequests(false)
    }
  },[refreshRequests])

  return (
    <div>
      <button style={{margin:'5px', width:'fit-content'}} className="wavy-image-back" onClick={handleOpen} ><h5 style={{marginBottom:'0px'}}>View Requests</h5></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{margin:'5%',overflow:'auto'}}
      >
        <div className='createrideform' style={{backgroundColor:'white'}}>

            <div style={{display:'flex', justifyContent:'space-between' }}>
              <h2 style={{fontWeight:'bold'}}>Ride #{data.id} Requests</h2>
              <Link onClick={handleClose}><h2><IonIcon icon={close}/></h2></Link>
            </div>
            
            {/* <div className='fromto center'>
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
            </div> */}
            <div style={{padding:'0% 10%'}}>
            {rideRequests.length !== 0 && rideRequests.slice().reverse().filter(req => req.request_status === "Pending" ).map(req => (
                <RequestListView key={req.id} id={req.id} data={req} />
            ))}
            {
              rideRequests.filter(req => req.request_status === "Pending" ).length == 0 && <h6>No Requests to show</h6>
            }
            
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