//import './styles/driverportal.css'
import { useContext, useEffect, useState } from 'react'

import { TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import SyncAltIcon from '@mui/icons-material/SyncAlt';

import { AuthContext } from '../../../context/AuthContext';
import { RidesContext } from '../../../context/RidesContext';
import RideListView from '../../../components/RideListView';

export default function SearchRides(){

    const { user, logout } = useContext(AuthContext);
    const {fetchRecentRides, recentRides} = useContext(RidesContext)

    const [searchResults, setSearchResults] = useState([])
    const [searchData, setSearchData] = useState({
        from:'',
        to:'',
        date:null
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setSearchData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (recentRides.length !== 0) {
            const filteredRides = recentRides.filter(ride => {
              // Perform your date comparison here, assuming searchData.date is the date you want to compare with
              // Adjust this condition based on how you want to compare the dates
              return ride.date === searchData.date.toISOString().split('T')[0];
            });
          
            // Update searchResults with the filtered rides
            setSearchResults([...searchResults, ...filteredRides]);
          }
    }

    useEffect(() => {
        fetchRecentRides();
      }, []);

    return(
        <>
        <br /><br /><br />
        <div>
        

            <div className="search-box">
                <h3 style={{fontWeight:'bold'}}>Search for a Ride</h3>
                <h5>Where do you wanna go {user!=null && user.username} ? </h5>

                <br/>
                <form className="search-container">
        
                    <div className="item">
                        <TextField id="outlined-basic" label="From" variant="outlined" onChange={handleChange}  fullWidth required/>
                    </div>
                    
                    <SyncAltIcon style={{ margin: '0px 10px' }} />

                    <div className="item">
                        <TextField id="outlined-basic" label="To" variant="outlined" onChange={handleChange}  fullWidth required/>
                    </div>

                    <div className="item">
                        <DatePicker label='Date of Travel' onChange={(date) => handleChange({target: { name: "date", value: date }})}  fullWidth required/>
                    </div>

                    <div className="item">
                        <button className="wavy-image-back" onClick={handleSubmit} style={{backgroundPosition:'130%'}}>Search Rides</button>
                    </div>
                </form>
            </div>

            {
            searchResults.length!==0 && (
                <div>
                    <br />
                    <h2 style={{fontWeight:'bold'}}>Search Results({searchResults.length})</h2>

                    <br/><br/>
                    {
                        searchResults.map(ride => 
                            <RideListView key={ride.id} data={ride} />
                        )
                    }
                </div>
            )
        }
        </div>
        </>
    )
}