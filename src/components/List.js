import { useState } from "react";

function List() {
    const [list, setList] = useState([])
    const [count, setCount] = useState(1)

    function updateValue() {
        const itemName = "item"+count
        setList((prevData) => {return [ ...prevData, itemName]})
        setCount((prevCount) => {return prevCount+1})
    }

     console.log("cuurentstate", list)
    return <>
     <h1>This is the item list</h1>
     <button onClick={updateValue}>click me</button>
     <ul>
        {list.map((el, index) => <li key={index}>{el}</li>)}
     </ul>
    </>
}

export default List;