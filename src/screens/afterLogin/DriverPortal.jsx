import { Outlet } from 'react-router-dom'

import SwitchBar from '../../components/SwitchBar'
import './styles/driverportal.css'

export default function DriverPortal() {
    const routes = [
        {
            text:'Active',
            path:''
        },
        {
            text:'Requests',
            path:'requests'
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
                Rides
            </h2>
            
            <button className="button-centralized iceblue-back"><h2 className='bold'>+ Create Ride</h2></button>
            
            <br /><br />
            <SwitchBar routes={routes} />
            
            <Outlet />
             
        </div>
        </>
    )
}