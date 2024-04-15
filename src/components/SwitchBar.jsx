import { NavLink } from "react-router-dom"
import './styles/SwitchBar.css'


export default function SwitchBar({routes}){
    
    return(
        <>
            <div className="nav-container">
                <ul className="center" style={{padding:'0px',width:'100%'}}>
                {   
                    routes.map((route, index) => (
                        <NavLink end={index===0} key={index} to={route.path} className="switchbar-link">
                            {route.text}
                        </NavLink>
                ))}
                </ul>
            </div>
            
        </>
    )
}