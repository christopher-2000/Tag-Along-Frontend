import { IonIcon } from '@ionic/react'
import RideRequest from '../screens/afterLogin/RideRequest'
//import './styles/RideListView.css'
import { calendarOutline, trashBin, trashOutline } from 'ionicons/icons'
import EditRide from '../screens/afterLogin/driver-routes/EditRide'


export default function ActiveListView(){
    return(
        <>
            
            <div className="ride-list-view">
            <div style={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h5><IonIcon icon={calendarOutline} /> 12/31/2024</h5><br />
                <button style={{margin:'5px'}} className='deleteicon'><IonIcon icon={trashOutline} /></button>
            </div>
                <div className='ridelist-body'>
                    <div className='fromto'>
                        <div className='from center'>
                            <h5 className='bold'>15:00</h5>
                            <h5>Fort Wayne</h5>
                        </div>
                        <div className='duration center'>
                            <h6>5 Hours</h6>
                            <h5>{"------>"}</h5>
                        </div>
                        <div className='to center'>
                            <h5 className='bold'>16:00</h5>
                            <h5>Chicago</h5>
                        </div>
                    </div>

                    <div className='driver-car'>
                        <h5>Driver Name</h5>
                        <h5>Car Name</h5>
                    </div>

                    <div className='seatrate'>
                        <div className='noofSeat center'>
                            <h5 className='bold'>Vacant Seats</h5>
                            <h5>5</h5>
                        </div>

                        <div className='Rate/Head center'>
                            <h5 className='bold'>Rate</h5>
                            <h5 className='price'>$5 /head</h5>
                        </div>
                    </div>


                    <EditRide />

                </div>
            </div>
        </>
    )
}