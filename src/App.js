

import Header from './Header';
import './App.css';
import Footer from './Footer';
import Content from './Content';
import React, { useState } from 'react'
import AddItem from './AddItem';



function App() {

  const [items, setItems] = useState(
    [
      {
        id: 1,
        checked: true,
        item: "ayirukanum"

      },

       {
        id: 2,
        checked: false,
        item: "kulikanum"

      },

       {
        id: 3,
        checked: false,
        item: "sapdanum"

      }
    ]
  )

  const [newItem, setNewItem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(newItem)
    addItem(newItem)
    setNewItem('')
  }


  const addItem = (item) => {
    const id = items.length? items[items.length -1].id + 1 : 1
    const addNewItem = {id, checked:false, item}
    const listItems = [...items, addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))

    console.log(id)
  } 


  const handleCheck = (id) => {
    const ListItems = items.map((item) => item.id === id ? {...item, checked:!item.checked} : item)
    setItems(ListItems)
    localStorage.setItem("todo_list", JSON.stringify(ListItems))

  }

  const handleDelete = (id) => {
    alert("hi")
   const ListItems = items.filter((item) => item.id!==id)
   setItems(ListItems)
   localStorage.setItem("todo_list", JSON.stringify(ListItems))
  }
  
  

return(
  <div className='App'>
    <>
    <Header title="ramsprinto runner da" />
    <AddItem 
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
    />
    <Content 
    items = {items}
    handleCheck={handleCheck}
    handleDelete={handleDelete}
    />
    <Footer 
    length = {items.length}
    />
    </>
    
  </div>
)

  
}

export default App;
