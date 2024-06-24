import React, { useState } from 'react'
import { BlogsContext } from './BlogsContext';
// @ts-ignore
import {BLogPublish} from './BlogPublish';
export const BlogMain = () => {

    const [blogs, setblogs] = useState([]);

  return (
    <div>
        <h1>
            Main Blogs
        </h1>

        <BlogsContext.Provider value={{blogs,setblogs}}>
            <BLogPublish></BLogPublish>
        </BlogsContext.Provider>
    </div>
  )
}
