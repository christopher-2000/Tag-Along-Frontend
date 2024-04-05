import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'

export default function Dashboard() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogout = () => {
        // Call the logout function from AuthContext
        logout();
    };

    return (
        <div style={styles.dashboardContainer}> {/* Apply inline styles */}
            <h1>Dashboard of Tag Along</h1>
            <h2>Hi, {user != null && user.username}</h2>
            {/* Render the logout button with inline styles */}
            <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
        </div>
    );
}

// Define inline styles
const styles = {
    dashboardContainer: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
    },
    logoutButton: {
        backgroundColor: '#f44336', /* Red background color */
        color: 'white', /* White text color */
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};