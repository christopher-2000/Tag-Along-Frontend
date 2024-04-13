import './styles/RideListView.css'


export default function RideListView(){
    return(
        <>
            
            <div className="ride-list-view">
            <h6>12/31/2024</h6>
                <div className='fromto'>
                    <div className='from center'>
                        <h5 className='bold'>15:00</h5>
                        <h5>Fort Wayne</h5>
                    </div>
                    <div className='duration center'>
                        <h6>5 Hours</h6>
                        <h5>{"------>"}</h5>
                    </div>
                    <div className='to center'>
                        <h5 className='bold'>16:00</h5>
                        <h5>Chicago</h5>
                    </div>
                </div>

                <div className='driver-car'>
                    <h5>Driver Name</h5>
                    <h5>Car Name</h5>
                </div>

                <div className='seatrate'>
                    <div className='noofSeat center'>
                        <h5 className='bold'>Vacant Seats</h5>
                        <h5>5</h5>
                    </div>

                    <div className='Rate/Head center'>
                        <h5 className='bold'>Rate</h5>
                        <h5 className='price'>$5 /head</h5>
                    </div>
                </div>

                <div>
                    <button>TAG ALONG</button>
                </div>
            </div>
        </>
    )
}