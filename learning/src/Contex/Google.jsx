import React, { useState } from 'react'
import { AppContext } from '../Context'
import { ThemeContext } from '../ThemeContext'
import { Android } from './Android'
import {IoS} from './IoS'
export const Google = () => {

    // @ts-ignore
    const [Companay, setCompanay] = useState("Alphabate")
    const pingGoogle = ()=>{
        alert("Google Is Ping.......!")
    }

  return (
    <div><h1>GOOGLE COMP....</h1>
    <AppContext.Provider value={{Companay,pingGoogle}}>
        <ThemeContext.Provider value={{theme:"light"}}>
            <Android></Android>
        </ThemeContext.Provider>
    </AppContext.Provider>
    <ThemeContext.Provider value={{theme:"dark"}}>
        <IoS></IoS>
    </ThemeContext.Provider></div>
  )
}
