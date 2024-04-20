import { Height } from '@mui/icons-material';
import React from 'react';

const StatusTag = ({ status }) => {
  let backgroundColor, textColor;

  switch (status) {
    case 'Active':
      backgroundColor = '#6FE386'; // Medium Aquamarine
      textColor = '#006400'; // Dark Green
      break;
    case 'Approved':
      backgroundColor = '#6FE386'; // Medium Aquamarine
      textColor = '#006400'; // Dark Green
      break;
    case 'Completed':
      backgroundColor = '#add8e6'; // Light Blue
      textColor = '#00008b'; // Dark Blue
      break;
    case 'Cancelled':
      backgroundColor = '#ffd700'; // Gold
      textColor = '#333'; // Dark Gray
      break;
    case 'Pending':
      backgroundColor = '#ffd700'; // Gold
      textColor = '#333'; // Dark Gray
      break;
    case 'Deleted':
      backgroundColor = '#dc143c'; // Crimson
      textColor = '#fff'; // White
      break;
    case 'Declined':
      backgroundColor = '#dc143c'; // Crimson
      textColor = '#fff'; // White
      break;
    default:
      backgroundColor = '#808080'; // Gray
      textColor = '#000'; // Black
  }

  const tagStyle = {
    display: 'inline',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    backgroundColor,
    color: textColor,
    height:'fit-content'
  };

  return <div style={tagStyle}>{status}</div>;
};

export default StatusTag;
