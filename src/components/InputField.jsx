// InputField.jsx
import React from 'react';

import './styles/InputField.css'

import { IonIcon } from '@ionic/react';
import { person,mail,lockClosed } from 'ionicons/icons';

const inputFieldSetup = {
  'email':{
    'icon':mail,
    'type':'email',
    'placeholder':'email',
    'name':'email'
  },
  'password':{
    'icon':lockClosed,
    'type':'password',
    'placeholder':'password',
    'name':'password'
  },
  'username':{
    'icon':person,
    'type':'username',
    'placeholder':'username',
    'name':'username'
  }
}

const InputField = ({ type, onChange }) => {
  return (
    <div className="input-field">
      <IonIcon icon={inputFieldSetup[type]['icon']} />
        <input
          type={inputFieldSetup[type]['type']}
          placeholder={
            inputFieldSetup[type]['placeholder']
          }
          name={
            inputFieldSetup[type]['name']
          }
        />
    </div>
  );
};

export default InputField;
