import { IonIcon } from '@ionic/react'
import RideRequest from '../screens/afterLogin/RideRequest'
//import './styles/RideListView.css'
import { calendarOutline, create, trashBin, trashOutline } from 'ionicons/icons'
import EditRide from '../screens/afterLogin/driver-routes/EditRide'
import { Edit } from '@mui/icons-material'
import { RidesContext } from '../context/RidesContext'
import { useContext, useState } from 'react'
import CustomSnackbar from './SnackBar'
import ViewRequests from '../screens/afterLogin/driver-routes/ViewRequests'
import StatusTag from './StatusTag'


export default function ActiveListView({data}){
    const [reloadKey, setReloadKey] = useState(0);
    const [openSnack, setOpenSnack] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('success'); // Default to success
    
    const content = {
        date:data.date,
        from:data.starting_point,
        to:data.destination,
        startTime:data.starttime.slice(11, 16).split(':').map((component) => component.padStart(2, '0')).join(':'),
        endtime:data.endtime.slice(11, 16).split(':').map((component) => component.padStart(2, '0')).join(':'),
        seats:data.available_seats,
        price:data.price_per_head,
        driver:data.driver.username,
        car:data.car.model,
        id:data.id,
        duration:{
            hours:0,
            minutes:0
        }
    }
    const startDate = new Date(data.starttime);
    const endDate = new Date(data.endtime);
    const durationInMillis = endDate.getTime() - startDate.getTime();

    content.duration.hours = Math.floor(durationInMillis / (1000 * 60 * 60));
    content.duration.minutes = Math.floor((durationInMillis % (1000 * 60 * 60)) / (1000 * 60));

    const {deleteRide, changeRefreshRides } = useContext(RidesContext)

    const handleDelete = async () => {
        const success = await deleteRide(data.id)
        if(success) {
            setSeverity('success');
            setMessage('Success! Your Ride was Deleted successfully.');
            setOpenSnack(true);
            changeRefreshRides(true)
            
        }
        if(!success){
            console.log('Something went wrong:');
            setSeverity('error');
            setMessage('Error! Something went wrong.');
            setOpenSnack(true);
        }
    }
    return(
        <>
            <CustomSnackbar
                open={openSnack}
                setOpen={setOpenSnack}
                message={message}
                severity={severity}
            />
            <div className="ride-list-view">
                <div style={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <h5><IonIcon icon={calendarOutline} /> {content.date} | RideID #{content.id}</h5><br />
                    <div style={{display:'flex'}}>
                        <EditRide data={content}/>
                        <button style={{margin:'5px'}} className='iconbutton deleteicon' onClick={handleDelete}><IonIcon icon={trashOutline} /></button>
                    </div>
                </div>

                <StatusTag status={data.ride_status} /><br />
                
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

                    <div className='driver-car center'>
                            <h5 className='bold'>Driver & Car</h5>
                            <div className='lowflex'>
                                <h5>{content.driver} | </h5><h5>| {content.car}</h5>
                            </div>
                            
                        
                    </div>

                    <div className='seatrate'>
                        <div className='noofSeat center'>
                            <h5 className='bold'>Vacant Seats</h5>
                            <h5>{content.seats}</h5>
                        </div>

                        <div className='Rate/Head center'>
                            <h5 className='bold'>Rate</h5>
                            <h5 className='price'><span style={{color:'green'}}>${content.price}</span> /head</h5>
                        </div>
                    </div>
                </div>

                <div style={{display:'flex', justifyContent:'right'}}>
                    <ViewRequests data={content} />
                </div>
            </div>
        </>
    )
}