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
        <br /><br /><br />
        <div className='dashboard-container'>
            <h2 style={{fontWeight:'bold'}}>
                Passenger Portal
            </h2>
            
            <br /><br />
            <SwitchBar routes={routes}/>
            
            <Outlet />
             
        </div>
        </>
    )
}