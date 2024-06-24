import React, { useContext } from 'react'
import { TweetContex } from './tweetContex'
import { DisplayTwtter } from './DisplayTwtter';

export const DisplayUser = () => {

    const {tweets,twwetHandler} = useContext(TweetContex);

  return (
    <div>
        <h1>DisplayUser</h1>
        <ul>
        {
            tweets?.map((tw)=>{
                return(
                    <li>
                        <button onClick={()=>{twwetHandler(tw.username)}} className='btn btn-info'>{tw.username}</button>
                    </li>
                )
            })
        }
        </ul>
        <DisplayTwtter/>
    </div>
  )
}
