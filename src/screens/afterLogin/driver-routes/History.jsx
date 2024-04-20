import { useContext, useEffect } from "react";
import { RidesContext } from "../../../context/RidesContext";
import HistoryListView from "../../../components/HistoryListView";

export default function History(){
    const {myrides, fetchMyRides} = useContext(RidesContext)

    useEffect(() => {
        fetchMyRides()
    },[])

    return(
        <>
        <br /><br />
        {myrides.length !== 0 
        && 
        myrides.slice().reverse()
        .filter(ride => ride.ride_status === "Deleted" || ride.ride_status === "Cancelled" || ride.ride_status === "Completed")
        .map(ride => (
                <HistoryListView key={ride.id} id={ride.id} data={ride} />
            ))}
        {
            myrides.length == 0 && <h6>No Requests to show</h6>
        }
        </>
    )
}