import React from 'react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { BlogsContext } from './BlogsContext'
import { BlogList } from './BlogList'

export const BlogPublish = () => {

    const {register,handleSubmit} = useForm()
    const {blogs,setblogs} = useContext(BlogsContext)
    const submitHandler = (data)=>{
        setblogs([...blogs,data])
    }

  return (
    <div>
        <h1>PUBLISH BLOG</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>AUTHOR NAME</label>
                <input type="text" {...register('author')} />
            </div>
            <div>
                <label>TITLE</label>
                <input type="text" {...register('title')} />
            </div>
            <div>
                <label>CONTENT</label>
                <textarea {...register('content')} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>

        <BlogList></BlogList>
    </div>
  )
}
