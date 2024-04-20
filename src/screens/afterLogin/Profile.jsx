import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Avatar, IconButton, List, ListItem, ListItemText, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import './styles/profile.css';

export default function Profile() {
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [email, setEmail] = useState("john.doe@example.com");
    const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
    const [profilePic, setProfilePic] = useState(null);
    const [profilePicPreview, setProfilePicPreview] = useState('');
    const [cars, setCars] = useState([
        {
            id: 1,
            model: "Tesla Model S",
            licensePlate: "ABC-123",
            seats: 5,
            mileage: "50,000",
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
            mileage: "40,000",
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

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} alignItems="center" display="flex" flexDirection="column">
                <Avatar src={profilePicPreview} alt="Profile" sx={{ width: 120, height: 120 }} />
                <Typography variant="body1" gutterBottom>
                    Hello, {firstName} {lastName}!
                </Typography>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setIsEditingProfile(!isEditingProfile);
                }}>
                    {isEditingProfile && (
                        <TextField
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e, true)}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />
                    )}
                    <TextField
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        disabled={!isEditingProfile}
                    />
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        disabled={!isEditingProfile}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={!isEditingProfile}
                    />
                    <TextField
                        label="Phone Number"
                        type="tel"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        disabled={!isEditingProfile}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        {isEditingProfile ? "Save" : "Edit"} Profile
                    </Button>
                </form>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6">Car Details</Typography>
                <List>
                    {cars.map(car => (
                        <React.Fragment key={car.id}>
                            <ListItem>
                                <Grid container alignItems="center" spacing={2}>
                                    <Grid item xs={4}>
                                        <Avatar 
                                            src={car.imageUrl}
                                            alt={car.model}
                                            variant="rounded"
                                            sx={{ width: 100, height: 60, border: '1px solid #ddd' }}
                                        />
                                        {car.isEditing && (
                                            <TextField
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handleImageChange(e, false, car.id)}
                                                fullWidth
                                                variant="outlined"
                                                margin="normal"
                                            />
                                        )}
                                    </Grid>
                                    <Grid item xs={8}>
                                        {car.isEditing ? (
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <TextField
                                                    label="Model"
                                                    variant="outlined"
                                                    value={car.model}
                                                    onChange={(e) => handleCarChange(car.id, 'model', e.target.value)}
                                                    margin="normal"
                                                />
                                                <TextField
                                                    label="License Plate"
                                                    variant="outlined"
                                                    value={car.licensePlate}
                                                    onChange={(e) => handleCarChange(car.id, 'licensePlate', e.target.value)}
                                                    margin="normal"
                                                />
                                                <TextField
                                                    label="Seats"
                                                    type="number"
                                                    variant="outlined"
                                                    value={car.seats}
                                                    onChange={(e) => handleCarChange(car.id, 'seats', parseInt(e.target.value))}
                                                    margin="normal"
                                                />
                                                <TextField
                                                    label="Mileage"
                                                    variant="outlined"
                                                    value={car.mileage}
                                                    onChange={(e) => handleCarChange(car.id, 'mileage', e.target.value)}
                                                    margin="normal"
                                                />
                                                <TextField
                                                    label="Color"
                                                    variant="outlined"
                                                    value={car.color}
                                                    onChange={(e) => handleCarChange(car.id, 'color', e.target.value)}
                                                    margin="normal"
                                                />
                                                <TextField
                                                    label="Car Type"
                                                    variant="outlined"
                                                    value={car.carType}
                                                    onChange={(e) => handleCarChange(car.id, 'carType', e.target.value)}
                                                    margin="normal"
                                                />
                                            </div>
                                        ) : (
                                            <>
                                                <Typography variant="subtitle1">{car.model}</Typography>
                                                <Typography variant="body2">{car.licensePlate}</Typography>
                                                <Typography variant="body2">Seats: {car.seats}</Typography>
                                                <Typography variant="body2">Mileage: {car.mileage}</Typography>
                                                <Typography variant="body2">Color: {car.color}</Typography>
                                                <Typography variant="body2">Type: {car.carType}</Typography>
                                            </>
                                        )}
                                        <IconButton onClick={() => toggleCarEdit(car.id)}>
                                            {car.isEditing ? <SaveIcon /> : <EditIcon />}
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            </Grid>
        </Grid>
    );
}
