import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { TweetContex } from './tweetContex';
import { DisplayUser } from './DisplayUser';
export const PostTwtter = () => {

    const { register, handleSubmit } = useForm();
    const [tweets, settweets] = useState([]); 
    const [user, setuser] = useState({});

    const submitHandler = (data)=>{
        console.log(data);
        // @ts-ignore
        settweets([...tweets,data]);
    }

      const twwetHandler = (tweetObj)=>{
        setuser(tweetObj)
        console.log("tw.......",tweetObj)
      }

  return (
    <div>
         <h1>POST</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>USER NAME</label>
          <input type="text" {...register("username")}></input>
        </div>
        <div>
          <label>MESSAGE</label>
          <input type="text" {...register("message")}></input>
        </div>
        <div>
          <input type="submit" value="POST"></input>
        </div>
      </form>
      <div
        style={{
          marginTop: 20,
          backgroundColor: "GrayText",
          minHeight: "200px",
          height: "auto",
        }}
      >
        <TweetContex.Provider value={{ tweets,twwetHandler,user }}>
          <DisplayUser />
        </TweetContex.Provider>
      </div>
    </div>
  )
}
