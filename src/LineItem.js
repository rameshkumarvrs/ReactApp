import React from 'react'

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
     <li key={item.id}>
                <input 
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked} 
        
        />
        <label style={(item.checked) ? {textDecoration:'line-through'} : null}>{item.item}</label>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
  )
}

export default LineItem