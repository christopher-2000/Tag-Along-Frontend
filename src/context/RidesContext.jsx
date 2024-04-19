import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";


const RidesContext = createContext()

const RidesProvider = ({children}) => {
    const {user} = useContext(AuthContext)
    const [cars, setCars] = useState([])
    const [recentRides, setRecentRides] = useState([]);
    const [myrides, setMyRides] = useState([])
    const [refreshRides, setRefreshRides] = useState(false);
    const [rideRequests, setRideRequests] = useState([]);          //driver
    const [myrequests, setMyRequests] = useState([]);              //passenger

    const changeRefreshRides = (value) => {
      setRefreshRides(value)
    }



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
            return true
        } catch (error) {
            // If an error occurs during the request, log it
            console.error('Error creating ride:', error);
            return false
        }
    }

    const editRide = async (ride_id, data) => {
      console.log(ride_id, data)
      const parsed_data = {
        car: 1,
        starting_point: data.from || undefined,
        destination: data.to || undefined,
        date: data.date ? data.date.toISOString().split('T')[0] : undefined,
        starttime: data.departingTime ? data.departingTime.toISOString().slice(0, 19) : undefined,
        endtime: data.arrivalTime ? data.arrivalTime.toISOString().slice(0, 19) : undefined,
        price_per_head: data.pricePerHead !== null && data.pricePerHead !== "" ? parseFloat(data.pricePerHead) : undefined,
        available_seats: data.seats !== null && data.seats !== "" ? parseInt(data.seats) : undefined,
        ride_status: "Scheduled",
        passengers: []
      };
      
        const req_data = {
          "ride_id":ride_id,
          "update":{

          }
        };

        console.log(req_data)

        for (const [key, value] of Object.entries(parsed_data)) {
          if (value !== null && value !== "" && value!==undefined) {
            req_data["update"][key] = value;
          }
        }
      
      try {
          // Make a POST request to the /api/create/ endpoint
          const response = await axios.patch('/api/rides/update/', req_data, { withCredentials: true });
  
          // Log the response data
          console.log('Ride Updated successfully:', response.data);
          return true
      } catch (error) {
          // If an error occurs during the request, log it
          console.error('Error creating ride:', error);
          return false
      }
  }

  const deleteRide = async (ride_id) => {
    const req_data = {
      "ride_id":ride_id,
      "update":{
          "ride_status":"Deleted"
      }
    };

    console.log(req_data)

    try {
        // Make a POST request to the /api/create/ endpoint
        const response = await axios.patch('/api/rides/update/', req_data, { withCredentials: true });

        // Log the response data
        console.log('Ride Deleted successfully:', response.data);
        return true
    } catch (error) {
        // If an error occurs during the request, log it
        console.error('Error Deleting ride:', error);
        return false
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

      const createRideRequest = async (data) => {
        const req_data = {
           "ride":data.ride,
           "comments":data.comments,
           "seats_requested":parseInt(data.seats),
           "request_status":"Pending"
        }
        try {
          console.log(req_data)
          const response = await axios.post('/api/rides/ride_requests/create/', req_data,{withCredentials:true});
          console.log('Ride Request Created Successfully')
          return true
        } catch (error) {
          console.error('Error Creating Ride Request:', error);
          return false
        }
      }


      const fetchMyRides = async () => {
        try {
          const response = await axios.get('/api/rides/myrides_list/', {withCredentials:true});
          console.log('Successfully fetched rides offered by me')
          setMyRides(response.data)
          return true
        } catch (error) {
          console.error('Error Creating Ride Request:', error);
          return false
        }
      }

      const fetchRideRequests = async (ride_id) => {
        console.log('Heree')
        try {
          const req_data = {
            'ride_id':ride_id
          }
          const response = await axios.post('/api/rides/ride_requests/',req_data, {withCredentials:true});
          console.log(`Successfully fetched requests for the Ride#${ride_id}`)
          setRideRequests(response.data)
          return true
        } catch (error) {
          console.error('Error Creating Ride Request:', error);
          return false
        }
      }

    return(
        <RidesContext.Provider value={{ createride, recentRides, fetchRecentRides, createRideRequest, fetchMyRides, myrides, editRide, deleteRide, refreshRides, changeRefreshRides, rideRequests, fetchRideRequests }}>
            {children}
        </RidesContext.Provider>
    )
}

export {RidesContext, RidesProvider};