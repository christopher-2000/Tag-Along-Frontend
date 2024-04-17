import React from 'react';
import './styles/CustomCard.css'; // Import CSS for styling
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CustomCard = ({ imageSrc, title, description, to }) => {
    const navigate = useNavigate()
  return (
    <div className='custom-card' onClick={() => navigate(to)}>
        <div className='card-image'>
            <img src={imageSrc} alt="" />
        </div>
        <div className='card-content'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div className='card-arrow'>
            <ArrowForward />
        </div>
    </div>
  );
};

export default CustomCard;
