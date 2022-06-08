import React from 'react'
import InputController from '../InputController/InputController';
import './CvForm.css';

export default function CvForm() {
  return (
    <div className='form_container'>
      <InputController section="Sexoooo" maxInputs={5}/>
    </div>
  )
}
