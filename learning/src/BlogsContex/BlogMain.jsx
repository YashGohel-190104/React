import React, { useState } from 'react'
import { BlogsContext } from './BlogsContext';
import { BlogPublish } from './BlogPublish';
export const BlogMain = () => {

    const [blogs, setblogs] = useState([]);

  return (
    <div>
        <h1>
            Main Blogs
        </h1>

        <BlogsContext.Provider value={{blogs,setblogs}}>
            <BlogPublish></BlogPublish>
        </BlogsContext.Provider>
    </div>
  )
}
