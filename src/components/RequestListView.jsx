import { IonIcon } from '@ionic/react'
import RideRequest from '../screens/afterLogin/RideRequest'
import './styles/RideListView.css'
import './styles/RequestListView.css'
import { calendarOutline, checkmarkCircle, closeCircle } from 'ionicons/icons'
import { useContext, useState } from 'react'
import { RidesContext } from '../context/RidesContext'
import CustomSnackbar from './SnackBar'


export default function RequestListView({data}){
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
    
    return(
        <>
            <div className="ride-list-view" style={{height:'fit-content'}}>
            <h5><span style={{fontWeight:'bold'}}>Requester </span> <span style={{color:'purple'}}>@{data.requested_by.username}</span></h5><br />
            
                <div className='ridelist-body'>
                    
                    <div className='reqseats center'>
                        <h5 style={{fontWeight:'bold'}}>Requested Seats</h5>
                        <h5>{data.seats_requested}</h5>
                    </div>

                    <div className='comments'>
                        <h5 style={{fontWeight:'bold' }}>Additional Comments</h5>
                        <h5>{data.comments}</h5>
                    </div>

                    <div className='acceptReject'>
                        <button className='iconbutton deleteicon' onClick={() => handleRequest(false)} style={{margin:'1%'}}><h5 style={{marginBottom:'0', display:'flex'}}><IonIcon icon={closeCircle} /> Reject</h5></button>
                        <button className='iconbutton editicon' onClick={() => handleRequest(true)} style={{margin:'1%'}}><h5 style={{marginBottom:'0', display:'flex'}}><IonIcon icon={checkmarkCircle} /> Accept</h5></button>
                    </div>

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

