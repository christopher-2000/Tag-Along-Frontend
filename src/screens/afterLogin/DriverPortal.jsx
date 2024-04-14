import { Outlet, useNavigate } from 'react-router-dom'

import SwitchBar from '../../components/SwitchBar'
import './styles/driverportal.css'
import CreateRide from './CreateRide'

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

    const navigate = useNavigate()

    return(
        <>
        <div className='rides-container'>
            <h2 style={{fontWeight:'bold'}}>
                Rides
            </h2>
            
            <CreateRide />
            <br /><br />
            <SwitchBar routes={routes} />
            
            <Outlet />
            
        </div>
        </>
    )
}