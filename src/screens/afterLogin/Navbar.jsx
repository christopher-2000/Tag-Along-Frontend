import MenuIcon from '@mui/icons-material/Menu';
import { IonIcon } from '@ionic/react';
import { carSport, speedometerOutline, carSportOutline, personOutline, peopleOutline, starHalfOutline} from 'ionicons/icons'; // Import the desired icon from Ionicons
import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { AuthContext } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import './styles/navbar.css'

function Navbar() {

    const [isHovered, setIsHovered] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {user, logout} = useContext(AuthContext)

    const handleLogout = () => {
        // Call the logout function from AuthContext
        logout();
    };

    const location = useLocation();

    // Function to determine if a NavLink should be active
    const isActive = (path) => {
        return location.pathname === path;
    };

    const iconStyle = {
        fontSize: '2rem',
        cursor: 'pointer',
        border: isHovered ? '2px solid white' : '2px solid #053973', // Add border on hover
        borderRadius: '10px',
        transition: 'border 0.3s ease', // Add transition for border
        padding:'0px 10px',
        margin:'0px 10px'
    };

    return (
      <nav className="dark-blue-back navbar-dashboard" >
        <div 
            style={iconStyle} 
            onMouseOver={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
            onClick={handleShow}
        >
            <MenuIcon sx={{fontSize:'2rem', margin:'0px'}}/>
        </div>
        
        
        <div style={brandStyle}>
            <IonIcon icon={carSport} style={{ fontSize: '2rem' ,margin:'0px 10px'}} />
            TAG ALONG
        </div>

        <Offcanvas show={show} onHide={handleClose} id='sidebar'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Hi, {user!=null && user.username}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <ul>
                <NavLink to="" >
                    <div className={isActive('/go') ? 'activeitem sideBarItem' : 'sideBarItem'}>
                        <IonIcon icon={speedometerOutline} style={{ fontSize: '1.5rem' ,margin:'0px 10px'}} />
                        Dashboard
                    </div>
                </NavLink>
                <NavLink to="rides" activeClassName="activeitem">
                    <div className={isActive('/go/rides') ? 'activeitem sideBarItem' : 'sideBarItem'}>
                    <IonIcon icon={carSportOutline} style={{ fontSize: '1.5rem' ,margin:'0px 10px'}} />
                        Rides
                    </div>
                </NavLink>
                <NavLink to="profile" activeClassName="activeitem">
                    <div className={isActive('/go/profile') ? 'activeitem sideBarItem' : 'sideBarItem'}>
                    <IonIcon icon={personOutline} style={{ fontSize: '1.5rem' ,margin:'0px 10px'}} />
                        Profile
                    </div>
                </NavLink>
                <NavLink to="community" activeClassName="activeitem">
                    <div className={isActive('/go/community') ? 'activeitem sideBarItem' : 'sideBarItem'}>
                    <IonIcon icon={peopleOutline} style={{ fontSize: '1.5rem' ,margin:'0px 10px'}} />
                        Community
                    </div>
                </NavLink>
                <NavLink to="reviews" activeClassName="activeitem">
                    <div className={isActive('/go/reviews') ? 'activeitem sideBarItem' : 'sideBarItem'}>
                    <IonIcon icon={starHalfOutline} style={{ fontSize: '1.5rem' ,margin:'0px 10px'}} />
                        Reviews
                    </div>
                </NavLink>
            </ul>
                <button style={logoutButton} onClick={handleLogout}>LOG OUT</button>
            </Offcanvas.Body>
        </Offcanvas>
        
        {/* Add your navigation links or components here */}
      </nav>
    );
  }

  const navbarStyle = {
    display: 'flex', // Use flexbox layout
    justifyContent: 'flex-start', // Align items to the left
    padding: '10px 20px', // Adjust padding as needed
    alignItems: 'center',
  };

  const sideBarItem = {
    border:'1px solid black',
    padding:'10px 20px', 
    width:'90%',
    marginBottom:'2%',
    color:'white',
  }

  const brandStyle = {
    fontSize: '1.5rem', // Adjust font size as needed
    fontWeight: 'bold', // Make the brand text bold
    margin:'0px 20px',
    display:'flex',
    alignItems:'center'
  };
  
 const logoutButton =  {
    backgroundColor: '#f44336', /* Red background color */
    color: 'white', /* White text color */
    border: 'none',
    width:'80%',
    borderRadius: '4px',
    padding: '10px 20px',
    margin:'10%',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
};

export default Navbar;