import { Outlet } from 'react-router-dom'
import SwitchBar from '../../components/SwitchBar'
import './styles/driverportal.css'

export default function Passenger(){
    const routes = [
        {
            text:'Requested',
            path:''
        },
        {
            text:'History',
            path:'history'
        },

    ]
    return(
        <>
        <div className='rides-container'>
            <h2 style={{fontWeight:'bold'}}>
                Your Rides
            </h2>
            
            <br /><br />
            <SwitchBar routes={routes}/>
            
            <Outlet />
             
        </div>
        </>
    )
}