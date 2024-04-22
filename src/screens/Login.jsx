import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { TextField, Button, Grid, Typography, IconButton, InputAdornment } from '@mui/material';
import { ArrowBack, EmailOutlined, LockOutlined, PasswordRounded, Visibility, VisibilityOff } from '@mui/icons-material';


import InputField from '../components/InputField';
import '../App.css'; 
import ImageContainer from '../components/ImageContainer';
import './styles/login.css'
import { AuthContext } from '../context/AuthContext';


const Login = () => {
  const navigate = useNavigate()
  const {login, isLoggedIn} = useContext(AuthContext)
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [invalidError, setInvalidError] = useState(false);

  useEffect(() => {
    if(isLoggedIn){
      navigate('/staticfiles/go')
    }
  },[isLoggedIn, navigate])


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

  const handleSubmit = async (event) => {
    event.preventDefault();

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
    if(!emailError && !passwordError){
      console.log('No errors in email and password');
      
      const response = await login(email, password)
      console.log(response)
      if(response){
        navigate('/staticfiles/go')
      }
      if (!response){
        setInvalidError(true)
      }
    }
  };

    return (
        <div className="sub-container background-driving">
        <div className='form-box'>
          <div style={{display:'flex', justifyContent:'left'}}>
            <NavLink to="/staticfiles/"><ArrowBack  /></NavLink>
          </div>
        <h1>TAG ALONG..</h1>
        <form onSubmit={handleSubmit}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h5">Login</Typography>
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
            helperText={passwordError ? 'Password is required' : ''}
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
        {(passwordError || emailError) && <p style={{color:'red'}}> Please Fill out all the Required Fields</p>}
        { (invalidError) && <p style={{color:'red'}}> Incorrect Username or Password</p>}

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Grid>
      </Grid>
    </form>

        <p>
          Don't have an Account? <Link to="/signup">Sign Up</Link>
        </p>
        </div>
        
      </div>
  );
};

export default Login;
