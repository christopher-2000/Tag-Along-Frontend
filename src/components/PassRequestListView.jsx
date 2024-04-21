
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
    const startDate = new Date(data.ride.starttime);
    const endDate = new Date(data.ride.endtime);
    const durationInMillis = endDate.getTime() - startDate.getTime();

    content.duration.hours = Math.floor(durationInMillis / (1000 * 60 * 60));
    content.duration.minutes = Math.floor((durationInMillis % (1000 * 60 * 60)) / (1000 * 60));

    return(
        <>
            <div className="ride-list-view" style={{height:'fit-content'}}>
            <h5><span style={{fontWeight:'bold'}}>Request ID #{content.request_id} | <span style={{color:'purple'}}>Ride ID #{content.ride_id}</span></span></h5><br />

                <div className='ridelist-body'>
                    <div className='fromto'>
                        <div className='from center'>
                            <h5 className='bold'>{content.startTime}</h5>
                            <h5>{content.from}</h5>
                        </div>
                        <div className='duration center'>
                            <h6>{content.duration.hours}H {content.duration.minutes}M</h6>
                            <h5>{"--->"}</h5>
                        </div>
                        <div className='to center'>
                            <h5 className='bold'>{content.endtime}</h5>
                            <h5>{content.to}</h5>
                        </div>
                    </div>
                    
                    <div className='reqseats center'>
                        <h5 style={{fontWeight:'bold'}}>Requested Seats</h5>
                        <h5>{content.seats}</h5>
                    </div>

                    <div className='comments'>
                        <h5 style={{fontWeight:'bold' }}>Additional Comments</h5>
                        <h5>{content.comments}</h5>
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

