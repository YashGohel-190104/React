import React, { useContext } from 'react'
import { BlogsContext } from './BlogsContext'
import { DisplayBlog } from './DisplayBlog';

export const BlogList = () => {

    const {blogs} = useContext(BlogsContext);

  return (
    <div>
        <h1>
            Blog List
        </h1>
        <ul>
            {
                blogs?.map((b)=>{
                    return(
                        <li>
                            {b.author} - {b.title}
                        </li>
                    )
                })
            }
        </ul>

        <DisplayBlog></DisplayBlog>
    </div>
  )
}
