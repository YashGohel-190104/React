import React, { useContext } from 'react'
import { AppContext } from '../Context'
import{ThemeContext} from '../ThemeContext'
import { Os11 } from './Os11'
export const Android = () => {

    const {company} = useContext(AppContext)
    const {theme} = useContext(ThemeContext)
    console.log("android.....",company)

  return (
    <div>   
        <h1>ANDROiD..</h1>
    {theme}
    <Os11></Os11>
    </div>
  )
}

