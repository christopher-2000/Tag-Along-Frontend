import { IonIcon } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import './styles/backbutton.css'

const BackButton = () => {
    return(
        <button className='backbutton iceblue-back' onClick={() => window.history.back()}>
            <IonIcon icon={arrowBack} style={{ fontSize: '1.5rem' ,marginRight:'10px'}} />
            Back
        </button>
    )
}

export default BackButton;