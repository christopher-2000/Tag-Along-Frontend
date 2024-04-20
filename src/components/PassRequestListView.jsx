
import './styles/RideListView.css'
import './styles/RequestListView.css'

import { useContext, useState } from 'react'
import { RidesContext } from '../context/RidesContext'
import CustomSnackbar from './SnackBar'
import StatusTag from './StatusTag'


export default function PassRequestListView({data}){
    const [openSnack, setOpenSnack] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('success');

    const {handleApproval, changeRefreshRequests} = useContext(RidesContext)

    const handleRequest = async (decision) => {
        const success = await handleApproval(data.id, decision)
        
        console.log(success)
        if(success) {
            setSeverity('success');
            setMessage('Success! The request is processed successfully.');
            setOpenSnack(true);
            changeRefreshRequests(true);
          }
          if(!success){
            console.log('Something went wrong:');
            setSeverity('error');
            setMessage('Error! Something went wrong.');
            setOpenSnack(true);
          }
    }
    
    const content = {
        date:data.ride.date,
        from:data.ride.starting_point,
        to:data.ride.destination,
        startTime:data.ride.starttime.slice(11, 16).split(':').map((component) => component.padStart(2, '0')).join(':'),
        endtime:data.ride.endtime.slice(11, 16).split(':').map((component) => component.padStart(2, '0')).join(':'),
        seats:data.ride.available_seats,
        price:data.ride.price_per_head,
        driver:data.ride.driver.username,
        car:data.ride.car.model,
        ride_id:data.ride.id,
        duration:{
            hours:0,
            minutes:0
        },
        comments:data.comments,
        requested_seats:data.requested_seats,
        request_id:data.id,
        request_status:data.request_status
    }

    return(
        <>
            <div className="ride-list-view" style={{height:'fit-content'}}>
            <h5><span style={{fontWeight:'bold'}}>Request ID #{content.request_id} | <span style={{color:'purple'}}>Ride ID #{content.ride_id}</span></span></h5><br />

                <div className='ridelist-body'>
                    <div className='fromto'>
                        <div className='from center'>
                            <h5 className='bold'>{content.startTime}</h5>
                            <h5>Departure</h5>
                        </div>
                        <div className='duration center'>
                            <h6>3H 30M</h6>
                            <h5>{"--->"}</h5>
                        </div>
                        <div className='to center'>
                            <h5 className='bold'>18:00</h5>
                            <h5>Arrival</h5>
                        </div>
                    </div>
                    
                    <div className='reqseats center'>
                        <h5 style={{fontWeight:'bold'}}>Requested Seats</h5>
                        <h5>5</h5>
                    </div>

                    <div className='comments'>
                        <h5 style={{fontWeight:'bold' }}>Additional Comments</h5>
                        <h5>something</h5>
                    </div>

                    <StatusTag status={content.request_status} />

                </div>
            </div>
            <CustomSnackbar
                open={openSnack}
                setOpen={setOpenSnack}
                message={message}
                severity={severity}
            />
        </>
    )
}

