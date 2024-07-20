// @ts-nocheck
import { Rating, Slider, SliderMark, Stack, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useState } from 'react'

export const Mui2 = () => {

  const [rating, setrating] = useState(0);

  const handleRating = (event, newValue) => {
    setrating(newValue);
  };

  const [salaryRange, setsalaryRange] = useState([30000,100000]);

  const handleSliderChange = (event1,newvalue1)=>{
    setsalaryRange(newvalue1);
  }


  const getRatingDescription = (rating) => {
    switch (rating) {
      case 1:
        return 'Very Bad';
      case 2:
        return 'Bad';
      case 3:
        return 'Good';
      case 4:
        return 'Very Good';
      case 5:
        return 'Excellent';
      default:
        return 'No Rating';
    }
  };

  const employees = [
    {id:1, name: "Yash Gohel", salary:95000},
    {id:2, name: "Harsh Patel", salary:55000},
    {id:3, name: "Bhavika Panchal", salary:29000},
    {id:4, name: "Priya Kumari", salary:100000},
    {id:5, name: "Amit Rajapit", salary:98000},
    {id:6, name: "Vivek Soni", salary:90000},
    {id:7, name: "Foram Parekh", salary:10000},
    {id:8, name: "Deep Patel", salary:25000},
    {id:9, name: "khushi Daraji", salary:350000},
    {id:10, name: "Parth Vaghani", salary:70000},
    {id:11, name: "Rakesh Jain", salary:60000},
    {id:12, name: "Sumita Makvana", salary:35000},
    {id:13, name: "Hitesh Dave", salary:125000},
    {id:14, name: "HardevSinh Zala", salary:22000},
    {id:15, name: "Jhone Due", salary:82000}
  ]

  const filteredEmployees = employees.filter(
    (employees)=>employees.salary >= salaryRange[0] && employees.salary <= salaryRange[1]
  )

  const looserEmployees = ()=>{
    return employees.map((employees)=>{
      if(employees.salary <=30000){
        return (
          <li key={employees.id}>{employees.name}</li>
        );
      }else if (employees.salary >30000 && employees.salary <=80000){
        return(
          <li key={employees.id}>{employees.name}</li>
        )
      }else{
        return(
          <li key={employees.id}>{employees.name}</li>
        )
      }
    });
  }


  return (
    <div>
      <h2> Star Rating</h2>
      <Stack spacing={ 1 }>
        <Rating name="size-large" defaultValue={ 0 } size="large" onChange={ handleRating } />
      </Stack>
      <Typography variant='h4'>
        { getRatingDescription(rating) }
      </Typography>

      <div>
      <Slider sx={{width:450, color:"red"}} value={salaryRange} onChange={handleSliderChange} min={30000} max={100000} step={500} defaultValue={30000} aria-label="Default" valueLabelDisplay="auto" />
      </div>
      <div>
        {/* <Typography variant='h4'>salaryRange : {salaryRange[0]} - {salaryRange[1]}</Typography> */}
        <ul>
          {/* {filteredEmployees.map(employees=>(
            <li key={employees.id}>
              {employees.name} - salary:{employees.salary}
            </li>
          ))} */}

          {looserEmployees()}

        </ul>
      </div>
    </div>
  )
}
