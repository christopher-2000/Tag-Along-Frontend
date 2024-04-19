import { IonIcon } from '@ionic/react'
import RideRequest from '../screens/afterLogin/RideRequest'
import './styles/RideListView.css'
import './styles/RequestListView.css'
import { calendarOutline, checkmarkCircle, closeCircle } from 'ionicons/icons'
import { Cancel } from '@mui/icons-material'
import { CheckmarkCircle, CloseCircle } from 'react-ionicons'


export default function RequestListView({data}){
    
    return(
        <>
            <div className="ride-list-view" style={{height:'fit-content'}}>
            <h5><span style={{fontWeight:'bold'}}>Requester </span> <span style={{color:'purple'}}>@username</span></h5><br />
            
                <div className='ridelist-body'>
                    
                    <div className='reqseats center'>
                        <h5 style={{fontWeight:'bold'}}>Requested Seats</h5>
                        <h5>5</h5>
                    </div>

                    <div className='comments'>
                        <h5 style={{fontWeight:'bold' }}>Additional Comments</h5>
                        <h5>hey looking to ride with you</h5>
                    </div>

                    <div className='acceptReject'>
                        <button className='iconbutton deleteicon' style={{margin:'1%'}}><h5 style={{marginBottom:'0', display:'flex'}}><IonIcon icon={closeCircle} /> Reject</h5></button>
                        <button className='iconbutton editicon' style={{margin:'1%'}}><h5 style={{marginBottom:'0', display:'flex'}}><IonIcon icon={checkmarkCircle} /> Accept</h5></button>
                    </div>

                </div>
            </div>
        </>
    )
}

