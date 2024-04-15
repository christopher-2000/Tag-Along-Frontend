import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IonIcon } from '@ionic/react';
import { calendar, calendarOutline } from 'ionicons/icons';
import { Autocomplete, TextField } from '@mui/material';


export default function RideRequest() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>TAG ALONG</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{margin:window.innerWidth < 700 ?'2% 5%':'2% 20%',overflow:'auto'}}
      >
        <div style={{backgroundColor:'white', padding:'2%',borderRadius:'10px'}}>
            <h2 style={{fontWeight:'bold'}}>Request to Tag Along</h2>
            <br />
            <div className='inline'>
                
                <h4 style={{alignItems:'center'}}><IonIcon icon={calendarOutline}/> 12/31/2024</h4>
            </div>

            <br />
            <div className='center'>
                <div className='fromto center'>
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
                
                <br /><br />

                <div style={{width:'100%',margin:'2%'}} className='inline-200'>

                    <div className='drivercar center'>
                        <h5>Driver Name</h5>
                        <h5>Car Name</h5>
                    </div>

                    <div className='noofSeat center'>
                        <h5 className='bold'>Vacant Seats</h5>
                        <h5>5</h5>
                    </div>

                    <div className='Rate/Head center'>
                        <h5 className='bold'>Rate</h5>
                        <h5 className='price'>$5 /head</h5>
                    </div>
                </div>
                
                <div className='responsive-inline'>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        sx={{width:'100%'}}
                        options={['1','2','3']}
                        renderInput={(params) => <TextField {...params} label="Requested No.of Seats" />}
                    />
                    <TextField
                        label="Additional Comments"
                        id="outlined-start-adornment"
                        sx={{ m: 1 }}
                        fullWidth
                    />
                </div>

                <div className='inline-200'>
                <button style={{margin:'1%'}} onClick={handleClose} className='secondaryblue-back'>CANCEL</button>
                <button style={{margin:'1%'}} type="submit">REQUEST</button>
              </div>
            </div>
                
        </div>
      </Modal>
    </div>
  );
}