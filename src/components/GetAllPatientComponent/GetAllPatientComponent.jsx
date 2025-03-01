import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PatientComponent from './PatientComponent'
import './GetAllPatientComponent.css'
import BASE_URL from "../../../config";

const GetAllPatientComponent = () => {
    const [patient, setpatient] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}`)
            .then(response => setpatient(response.data))
            .catch(error => console.log(error))
    }, [])

  return (
    <div className='books'>
        {patient.map((patient, index)=>(
          //props
            <PatientComponent patient={patient} key={index}/>
        ))}
    </div>
  )
}

export default GetAllPatientComponent

//deals with an array of data