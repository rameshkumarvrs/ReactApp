



const Content = ({items, handleCheck, handleDelete}) => {

   

   
 
  return (
      <>
     
     <main>
      {(items.length) ? (
        <ul>
          {items.map(item => (
            <li key={item.id}>
                <input 
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked} 
        
        />
        <label style={(item.checked) ? {textDecoration:'line-through'} : null}>{item.item}</label>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          
          ))}
        </ul>
      ) : (
         <p>No records found makkale</p>
      )}
     </main>
      </>   
  )
}

export default Content