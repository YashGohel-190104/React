import axios from 'axios';
import React from 'react';
import { useState } from 'react';


export const UploadFile = () => {

    const [filePath, setfilePath] = useState();

    const fileHandler = async(event) => {
        const formData = new FormData();
        formData.append('Imagefile', event.target.files[0]);

        const res = await axios.post("http://localhost:3002/upload/upload",formData);
        console.log("res",res);
        setfilePath(res.data.secure_url);
        
    }

  return (
    <div>
        <h1>
            Upload File    
        </h1>

        <input 
        type="file" 
        name="file" 
        id='file'
        onChange={(event)=>{
            fileHandler(event);
        }}
        >

        </input>

         {filePath && (
        <img
          src={filePath}
          alt="file"
          style={{ width: "200px", height: "200px" }}
        ></img>
      )}
    </div>
  )
}
