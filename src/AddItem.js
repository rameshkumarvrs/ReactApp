import React from 'react'

const AddItem = ({newItem, setnewItem, handleSubmit}) => {
  return (
 <form className='addForm' onSubmit={handleSubmit}>
    <label htmlFor="addItem">AddItem</label>
    <input type="text" 
     autoFocus
     required
     placeholder='AddItem'
     value={newItem}
     onChange={(e) => setnewItem(e.target.value)}
     
    />
    <button
    type='submit'
    aria-label='Add Item'
    >submit</button>
 </form>
  )
}

export default AddItem