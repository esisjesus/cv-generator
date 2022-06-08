import React, {useState} from 'react'
import CvForm from "../../components/CvForm/CvForm";
import CvTemplate from "../../components/CvTemplate/CvTemplate";
import './CvStudio.css';


export default function CvStudio() {
  return (
    <div className="container">
        <CvForm/>
        <CvTemplate/>
    </div>
  )
}
