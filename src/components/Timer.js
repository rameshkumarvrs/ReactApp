import { useEffect, useState } from "react"

export default function Timer() {
    const [count, setcount] = useState(0)
    useEffect(() => {
        console.log("screen Rendered")
        // checkCount()
        // setcount(1)
        setTimeout(() => {
            
            setcount((prevState) => {
              return prevState + 1
            })

        }, 1000)
    }, [])

    

    function checkCount() {
        if(count>10){
            setcount(1)
        }
    }
     
     function updateCount() {
        setcount((prevCount) => {return prevCount+1})
     }


    return <>
    <h1>I have rendered {count} times</h1>
     <button onClick={updateCount}>Increse count</button>
    </>
     
}