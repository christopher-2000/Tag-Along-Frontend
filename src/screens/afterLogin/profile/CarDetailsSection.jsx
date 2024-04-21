// CarDetailsSection.js
import { Typography, TextField, IconButton, Avatar } from '@mui/material';
import { Edit as EditIcon, Save as SaveIcon } from '@mui/icons-material';

const CarDetailsSection = ({
    cars,
    handleImageChange,
    handleCarChange,
    toggleCarEdit
}) => {
    return (
        <div className="car-details-container">
            <Typography variant="h6">Car Details</Typography>
            <div className="car-list">
                {cars.map(car => (
                    <div key={car.id} className="car-item">
                        <div className="car-image-container">
                            <Avatar 
                                src={car.imageUrl}
                                alt={car.model}
                                className="car-image"
                            />
                            {car.isEditing && (
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(e, false, car.id)}
                                    className="file-input"
                                />
                            )}
                        </div>
                        <div className="car-info-container">
                            {car.isEditing ? (
                                <div className="edit-car-info">
                                    <TextField
                                        label="Model"
                                        variant="outlined"
                                        value={car.model}
                                        onChange={(e) => handleCarChange(car.id, 'model', e.target.value)}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <TextField
                                        label="License Plate"
                                        variant="outlined"
                                        value={car.licensePlate}
                                        onChange={(e) => handleCarChange(car.id, 'licensePlate', e.target.value)}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <TextField
                                        label="Seats"
                                        type="number"
                                        variant="outlined"
                                        value={car.seats}
                                        onChange={(e) => handleCarChange(car.id, 'seats', parseInt(e.target.value))}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <TextField
                                        label="Mileage"
                                        variant="outlined"
                                        value={car.mileage}
                                        onChange={(e) => handleCarChange(car.id, 'mileage', e.target.value)}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <TextField
                                        label="Color"
                                        variant="outlined"
                                        value={car.color}
                                        onChange={(e) => handleCarChange(car.id, 'color', e.target.value)}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <TextField
                                        label="Car Type"
                                        variant="outlined"
                                        value={car.carType}
                                        onChange={(e) => handleCarChange(car.id, 'carType', e.target.value)}
                                        margin="normal"
                                        fullWidth
                                    />
                                </div>
                            ) : (
                                <div className="view-car-info">
                                    <p style={{fontWeight:'bold'}}>{car.model}</p>
                                    <p style={{fontWeight:'bold'}}>{car.licensePlate}</p>
                                    Seats: {car.seats} <br />
                                    Mileage: {car.mileage} <br />
                                    Color: {car.color} <br />
                                    Type: {car.carType} <br />
                                </div>
                            )}
                            
                        </div>
                        <IconButton onClick={() => toggleCarEdit(car.id)} className="edit-button">
                                {car.isEditing ? <SaveIcon /> : <EditIcon />}
                        </IconButton>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarDetailsSection;
