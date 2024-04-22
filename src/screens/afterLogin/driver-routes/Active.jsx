import { useContext, useEffect } from "react";
import ActiveListView from "../../../components/ActiveListView";
import { RidesContext } from "../../../context/RidesContext";

export default function Active(){
    const {myrides, fetchMyRides, refreshRides, changeRefreshRides} = useContext(RidesContext)

    useEffect(() => {
        fetchMyRides()
    },[])

    useEffect(() => {
        if(refreshRides){
            fetchMyRides()
            changeRefreshRides(false)
        }
        
    },[refreshRides])

    return(
        <div>
            <br />
            <br />
            {myrides.length !== 0 && myrides.slice().reverse().filter(ride => ride.ride_status !== "Deleted").map(ride => (
                <ActiveListView key={ride.id} id={ride.id} data={ride} />
            ))}
            {
              myrides.length == 0 && <h6>No Requests to show</h6>
            }
            
        </div>
    )
}