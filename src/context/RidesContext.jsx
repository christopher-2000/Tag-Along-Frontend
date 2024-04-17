import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";


const RidesContext = createContext()

const RidesProvider = ({children}) => {
    const {user} = useContext(AuthContext)
    const [cars, setCars] = useState([])
    const [recentRides, setRecentRides] = useState([]);

    const createride = async (data) => {
        
        const req_data = {
            "car": 1,
            "starting_point": data.from,
            "destination": data.to,
            "date": data.date.toISOString().split('T')[0],
            "starttime":data.departingTime.toISOString().slice(0, 19),
            "endtime":data.arrivalTime.toISOString().slice(0, 19),
            "price_per_head": parseFloat(data.pricePerHead),
            "available_seats": parseInt(data.seats),
            "ride_status": "Scheduled",
            "passengers": []
          }
        
        try {
            // Make a POST request to the /api/create/ endpoint
            const response = await axios.post('/api/rides/create/', req_data, { withCredentials: true });
    
            // Log the response data
            console.log('Ride created successfully:', response.data);
        } catch (error) {
            // If an error occurs during the request, log it
            console.error('Error creating ride:', error);
        }
    }

    const fetchRecentRides = async () => {
        try {
          const response = await axios.get('/api/rides/rides_list/',{withCredentials:true});
          setRecentRides(response.data);
        } catch (error) {
          console.error('Error fetching recent rides:', error);
        }
      };


    return(
        <RidesContext.Provider value={{ createride, recentRides, fetchRecentRides }}>
            {children}
        </RidesContext.Provider>
    )
}

export {RidesContext, RidesProvider};