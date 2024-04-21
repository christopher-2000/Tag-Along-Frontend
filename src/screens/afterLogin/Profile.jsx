import React, { useContext, useState } from 'react';
import { TextField, Button, Grid, Typography, Avatar, IconButton, List, ListItem, ListItemText, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import './styles/profile.css';
import ProfileSection from './profile/ProfileSection';
import CarDetailsSection from './profile/CarDetailsSection';
import { AuthContext } from '../../context/AuthContext';

export default function Profile() {
    const {user} = useContext(AuthContext)
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
    const [profilePic, setProfilePic] = useState(null);
    const [profilePicPreview, setProfilePicPreview] = useState('');
    const [cars, setCars] = useState([
        {
            id: 1,
            model: "Tesla Model S",
            licensePlate: "ABC-123",
            seats: 5,
            mileage: "35",
            color: "Black",
            carType: "Sedan",
            isEditing: false,
            imageUrl: "/images/tesla-model-s.jpg"
        },
        {
            id: 2,
            model: "Ford Mustang",
            licensePlate: "XYZ-789",
            seats: 4,
            mileage: "15",
            color: "Red",
            carType: "Coupe",
            isEditing: false,
            imageUrl: "/images/ford-mustang.jpg"
        }
    ]);

    const handleImageChange = (e, isProfile = false, carId = null) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (isProfile) {
                    setProfilePic(file);
                    setProfilePicPreview(reader.result);
                } else {
                    setCars(cars.map(car => {
                        if (car.id === carId) {
                            return { ...car, imageUrl: reader.result };
                        }
                        return car;
                    }));
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleCarEdit = (carId) => {
        setCars(cars.map(car => {
            if (car.id === carId) {
                return { ...car, isEditing: !car.isEditing };
            }
            return car;
        }));
    };

    const handleCarChange = (carId, field, value) => {
        setCars(cars.map(car => {
            if (car.id === carId) {
                return { ...car, [field]: value };
            }
            return car;
        }));
    };

    return(
        <>
            <br />
            <div className='dashboard-container'>
                <br /><br /><br />
            <h2 style={{fontWeight:'bold'}}>Profile</h2>
            <div className='inline'>
                <ProfileSection
                    profilePicPreview={profilePicPreview}
                    firstName={firstName}
                    lastName={lastName}
                    user={user}
                    phoneNumber={phoneNumber}
                    isEditingProfile={isEditingProfile}
                    handleImageChange={handleImageChange}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setPhoneNumber={setPhoneNumber}
                    setIsEditingProfile={setIsEditingProfile}
                />
                <CarDetailsSection
                    cars={cars}
                    handleImageChange={handleImageChange}
                    handleCarChange={handleCarChange}
                    toggleCarEdit={toggleCarEdit}
                />
            </div>
        </div>
        </>
    )
}
