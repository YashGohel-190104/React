import React, { useState } from 'react'
import { useFormAction } from 'react-router-dom'
import {useForm } from 'react-hook-form'

export const FormHendling = () => {

    const {register,handleSubmit} = useForm()

    const submitHandler = (data)=>{
        console.log("DATA...",data);
    }
  return (
    <div>
        <h1> Form Handling</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>First Name:</label>
                <input type="text" {...register("fname")}></input>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" {...register("lname")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type="number" {...register("age")}></input>
            </div>
            <div>
                <label>E-Mail</label>
                <input type="email" {...register("email")}></input>
            </div>
            <div>
                <label>GENDER</label><br></br>
                MALE : <input type="radio" value="male" {...register("gender")}name ="gender" ></input><br></br>
                FEMALE : <input type="radio" value="female"  {...register("gender")}name ="gender"></input>
            </div>
            <div>
                <label>Skills</label><br></br>
                HTML : <input type="checkbox" value="html" {...register("skills")} name ="skills"></input><br></br>
                CSS : <input type="checkbox" value="css" {...register("skills")} name ="skills"></input><br></br>
                JAVA : <input type="checkbox" value="java" {...register("skills")} name ="skills"></input><br></br>
                JAVASCRIPT : <input type="checkbox" value="javascript" {...register("skills")} name ="skills"></input>
            </div>
            <div>
                <label>CITY</label>
                <select {...register("city")}>
                    <option value="Select">Select</option>
                    <option value="SURAT">SURAT</option>
                    <option value="BHAVNAGAR">BHAVNAGAR</option>
                    <option value="BARODA">BARODA</option>
                </select>
            </div>
            <div>
                <input type="submit"></input>
            </div>
        </form>
    </div>
  )
}
