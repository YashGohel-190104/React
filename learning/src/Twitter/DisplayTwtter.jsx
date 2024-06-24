import React, { useContext } from 'react'
import { TweetContex } from './tweetContex'

export const DisplayTwtter = () => {

    const {tweets,user} = useContext(TweetContex);

  return (
    <div>
        <h1>DISPLAY TWEET</h1>
    {
     tweets?.find((t)=>t.username === user)?.message
    }
    </div>
  )
}
