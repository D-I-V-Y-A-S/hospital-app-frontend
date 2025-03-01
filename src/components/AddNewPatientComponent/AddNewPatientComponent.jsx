import axios from 'axios'
import React, { useState } from 'react'
import BASE_URL from '../../../config'

const AddNewPatientComponent = () => {
    const [patientInfo, setpatientInfo] = useState({
        patient_id: '',
        name: '',
        age: '',
        gender: '',
        location: '',
        phone_number: '',
        email: '',
        height: '',
        weight: '',
        bmi: ''
    })

    const inputHandler = (event) => {
        const { name, value } = event.target
        setpatientInfo({ ...patientInfo, [name]: value })
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        axios
            .post(`${BASE_URL}`, patientInfo)
            .then((response) => {
                if (response.data.acknowledged === true)
                    alert(`${patientInfo.name} is updated successfully`);
                window.location.href = '/';
            })
            .catch((error) => {
                if (error.response) {
                    alert(`(Status : ${error.response.status}) ${error.response.data.message}`);
                }
            })
    }

    const { patient_id, name, age, gender, location, phone_number, email, height, weight, bmi } = patientInfo;

    return (
        <form className="form-container" onSubmit={formSubmitHandler}>
            <h2>Add patients</h2>

            <div className='form-group'>
                <label>patient_id</label>
                <input
                    type='text'
                    name="patient_id"
                    pattern='P+[0-9]{3,}'
                    placeholder='Enter the patient_id'
                    value={patient_id}
                    onChange={inputHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>patient Name</label>
                <input
                    type='text'
                    name="name"
                    placeholder='Enter the patient name'
                    value={name}
                    onChange={inputHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>patient Age</label>
                <input
                    type='number'
                    name="age"
                    placeholder='Enter the patient age'
                    value={age}
                    onChange={inputHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>gender</label>
                <select
                    type='text'
                    name="gender"
                    placeholder='Enter the gender'
                    value={gender}
                    onChange={inputHandler}
                    required
                >
                    <option value="">--select--</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            <div className='form-group'>
                <label>patient Location</label>
                <input
                    type='text'
                    name="location"
                    placeholder='Enter the patient location'
                    value={location}
                    onChange={inputHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>patient phone_number</label>
                <input
                    type='number'
                    name="phone_number"
                    placeholder='Enter the patient age'
                    value={phone_number}
                    pattern='[0-9]{10}'
                    onChange={inputHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>patient email</label>
                <input
                    type='text'
                    pattern="[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}"
                    name="email"
                    placeholder='Enter the patient email'
                    value={email}
                    onChange={inputHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>patient Height</label>
                <input
                    type='number'
                    name="height"
                    placeholder='Enter the patient height'
                    value={height}
                    onChange={inputHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>patient Weight</label>
                <input
                    type='number'
                    name="weight"
                    placeholder='Enter the patient weight'
                    value={weight}
                    onChange={inputHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>patient BMI</label>
                <input
                    type='number'
                    name="bmi"
                    placeholder='Enter the patient bmi'
                    value={bmi}
                    onChange={inputHandler}
                    required
                />
            </div>

            <div>
                <button type="submit">Update</button>
            </div>
        </form>
    )
}

export default AddNewPatientComponent