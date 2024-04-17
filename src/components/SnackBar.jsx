import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function CustomSnackbar({ open, setOpen, message, severity }) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Set position to top center
    >
      <div
        style={{
          backgroundColor: severity === 'success' ? '#4caf50' : '#f44336', // Green for success, red for error
          color: '#fff',
          padding: '12px 24px',
          borderRadius: '4px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {message}
      </div>
    </Snackbar>
  );
}

