import React from 'react'

export const MapDemoComponents = () => {

    var users = ["Yash","Keval","hitesh","Khushi","Khushali"]
    var employee = [
            {
                id:1,
                name:"Kanak"
            },
            {
                id : 2,
                name: "Suman"
            }
    ]

    return (
    <div>
        <h1>MapDemoComponents</h1>
        {
            users.map((users)=>{
                return(
                    <h1>
                        {users}
                    </h1>
                )
            })
        }

        {
            employee.map((employee)=>{
                return(
                    <ul>
                        <li>
                            {employee.id}{employee.name}
                        </li>
                    </ul>
                )
            })
        }
    </div>
  )
}
