import { IonIcon } from '@ionic/react'
import RideRequest from '../screens/afterLogin/RideRequest'
import './styles/RideListView.css'
import { calendarOutline } from 'ionicons/icons'


export default function RideListView({data}){
    
    const content = {
        date:data.date,
        from:data.starting_point,
        to:data.destination,
        startTime:data.starttime.slice(11, 16).split(':').map((component) => component.padStart(2, '0')).join(':'),
        endtime:data.endtime.slice(11, 16).split(':').map((component) => component.padStart(2, '0')).join(':'),
        seats:data.available_seats,
        price:data.price_per_head,
        driver:data.driver.username,
        car:data.car.model,
        id:data.id,
        duration:{
            hours:0,
            minutes:0
        }
    }
    const startDate = new Date(data.starttime);
    const endDate = new Date(data.endtime);
    const durationInMillis = endDate.getTime() - startDate.getTime();

    content.duration.hours = Math.floor(durationInMillis / (1000 * 60 * 60));
    content.duration.minutes = Math.floor((durationInMillis % (1000 * 60 * 60)) / (1000 * 60));

    return(
        <>
            <div className="ride-list-view">
            <h5><IonIcon icon={calendarOutline} /> {content.date} | RideID #{content.id}</h5><br />
            
                <div className='ridelist-body'>
                    <div className='fromto'>
                        <div className='from center'>
                            <h5 className='bold'>{content.startTime}</h5>
                            <h5>{content.from}</h5>
                        </div>
                        <div className='duration center'>
                            <h6>{content.duration.hours}H {content.duration.minutes}M</h6>
                            <h5>{"--->"}</h5>
                        </div>
                        <div className='to center'>
                            <h5 className='bold'>{content.endtime}</h5>
                            <h5>{content.to}</h5>
                        </div>
                    </div>

                    <div className='driver-car center'>
                        
                            <h5 className='bold'>Driver & Car</h5>
                            <div className='lowflex'>
                                <h5>{content.driver}</h5><h5> | {content.car}</h5>
                            </div>
                            
                        
                    </div>

                    <div className='seatrate'>
                        <div className='noofSeat center'>
                            <h5 className='bold'>Vacant Seats</h5>
                            <h5>{content.seats}</h5>
                        </div>

                        <div className='Rate/Head center'>
                            <h5 className='bold'>Rate</h5>
                            <h5 className='price'>${content.price} /head</h5>
                        </div>
                    </div>

                    <RideRequest data={content} />

                </div>
            </div>
        </>
    )
}