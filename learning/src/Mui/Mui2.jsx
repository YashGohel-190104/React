// @ts-nocheck
import { FormControlLabel, FormGroup, Rating, Slider, SliderMark, Stack, styled, Switch, Typography } from '@mui/material';
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
      if(employees.salary >=0 && employees.salary <=35000){
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


  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

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
          {filteredEmployees.map(employees=>(
            <li key={employees.id}>
              {employees.name} - salary:{employees.salary}
            </li>
          ))}

          {/* {looserEmployees()} */}

        </ul>
        
        <div>
          <br>
          </br>
        <FormGroup>
        <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label="MUI switch"
      />
        </FormGroup>
        </div>
      </div>
    </div>
  )
}
