import React from 'react'


const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem"> AddItem</label>
        <input 
         type="text" 
         autoFocus
         id= "addItem"
         placeholder='Add item'
         required
         value={newItem}
         onChange = {(e) => setNewItem(e.target.value)}

        
        />
        <button 
        type='submit'
        aria-label='Add Item'>
            Add item</button>
    </form>
  )
}

export default AddItem