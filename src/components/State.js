import { useState } from "react";


function State() {
    
    const [color, setColor] = useState('red')
    return(
        <>
        <p> The paragraphdftgdhhggh color is {color}</p>
        <button onClick={() => {setColor('blue')}}>click me da</button>
         </>
        )
   
    
}

export default State;