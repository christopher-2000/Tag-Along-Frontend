// signup.jsx
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { TextField, Button, Grid, Typography, IconButton, InputAdornment } from '@mui/material';
import { EmailOutlined, LockOutlined, Visibility, VisibilityOff, PersonOutline } from '@mui/icons-material';

import '../App.css'; 
import './styles/signup.css'

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError(false); // Reset username error when user is typing
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false); // Reset email error when user is typing
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(false); // Reset password error when user is typing
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if username is empty
    if (!username.trim()) {
      setUsernameError(true);
      return; // Exit early if username is empty
    }

    // Check if username is less than 6 characters
    if (username.length < 6) {
      setUsernameError(true);
      return; // Exit early if username is too short
    }

    // Check if email is empty
    if (!email.trim()) {
      setEmailError(true);
      return; // Exit early if email is empty
    }

    // Check if password is empty
    if (!password.trim()) {
      setPasswordError(true);
      return; // Exit early if password is empty
    }

    // Check if password is less than 8 characters
    if (password.length < 8) {
      setPasswordError(true);
      return; // Exit early if password is too short
    }

    // Check if email format is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      return; // Exit early if email is invalid
    }

    // Handle form submission logic here
  };

  return (
    <div className="sub-container walking-students">
      <div className='form-box'>
        <h1>TAG ALONG..</h1>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h5">Sign Up</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="username"
                label="Username"
                variant="outlined"
                value={username}
                onChange={handleUsernameChange}
                error={usernameError}
                helperText={usernameError ? 'Username is required and must be at least 6 characters' : ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutline />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                helperText={emailError ? 'Email is required and must be valid' : ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlined />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                error={passwordError}
                helperText={passwordError ? 'Password is required and must be at least 8 characters' : ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {(passwordError || emailError || usernameError) && <p style={{color:'red'}}> Please Fill out all the Required Fields</p>}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
