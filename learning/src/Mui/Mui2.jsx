import { Rating, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'

export const Mui2 = () => {

    const [rating, setrating] = useState(0);

    const handleRating = (event,newValue) => {
        setrating(newValue);
    };

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

  return (
    <div>
        <h2> Star Rating</h2>
<Stack spacing={1}>
      <Rating name="size-large" defaultValue={0} size="large" onChange={handleRating}/>    
    </Stack>
    <Typography variant='h4'>
        {getRatingDescription(rating)}
    </Typography>
    </div>
  )
}
