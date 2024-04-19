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
            text:'History',
            path:'history'
        },

    ]

    const navigate = useNavigate()

    return(
        <div className='white-wavy-back'>
            <div className='dashboard-container'>
                <h2 style={{fontWeight:'bold'}}>
                    Driver Portal
                </h2>
                
                <CreateRide />
                <br /><br />
                <SwitchBar routes={routes} />
                
                <Outlet />
                
            </div>
        </div>
    )
}