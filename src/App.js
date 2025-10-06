

import Header from './Header';
import './App.css';
import Footer from './Footer';
import Content from './Content';
import React, { useState } from 'react'



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
