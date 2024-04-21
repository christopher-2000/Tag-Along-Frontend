import './styles/ProfileSection.css'


import { Avatar, Typography, TextField, Button } from '@mui/material';

const ProfileSection = ({
    profilePicPreview,
    firstName,
    lastName,
    user,
    phoneNumber,
    isEditingProfile,
    handleImageChange,
    setFirstName,
    setLastName,
    setPhoneNumber,
    setIsEditingProfile
}) => {
    return (
        <div className="profile-container">
            <Avatar src={profilePicPreview} alt="Profile" className="profile-avatar" />
            <Typography variant="body1" gutterBottom>
                Hello, {user.username}!
            </Typography>
            <form onSubmit={(e) => {
                e.preventDefault();
                setIsEditingProfile(!isEditingProfile);
            }}>
                {isEditingProfile && (
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, true)}
                        className="file-input"
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
                    value={user.email}
                    disabled={true}
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
        </div>
    );
};

export default ProfileSection;
