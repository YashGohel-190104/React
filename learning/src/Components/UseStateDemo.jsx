import React, { useState } from 'react'

export const UseStateDemo = () => {

    var [count, setCount] = useState(0)

    const increseCount = () => {
        count = count + 1;
        setCount(count);
        console.log("After increment in count....", count);

    }

    return (
        <div>
            <h1 style={ { color: "blue" } }>USE STATE DEMO</h1>
            <h2>count = { count }</h2>

            <button onClick={ () => { increseCount() } }>increse +</button></div>
    )
}
