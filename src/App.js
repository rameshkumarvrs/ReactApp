

import Header from './Header';
import './App.css';
import Footer from './Footer';
import Content from './Content';
import React, { useEffect, useState } from 'react'
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';



function App() {
  
  const API_URL = "http://localhost:3500/items"
  const [items, setItems] = useState([])

  const [newItem, setNewItem] = useState('')
  const [search, searchItem] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [loading, setLoading] = useState(true)

 

 
    useEffect(() => {
    const fetchItems = async () => {
     try {
       const response = await fetch(API_URL);
       if(!response.ok) throw Error("Data not received")
       console.log(response)
       const listItems = await response.json()
       console.log(listItems)
       setFetchError(null)
       //setItems(listItems.items)
       setItems(Array.isArray(listItems) ? listItems : listItems.items || []);
     } catch (err){
       //console.log(err.message)
       setFetchError(err.message)
     }finally {
      setLoading(false)
     }
    } 
   setTimeout(() => {
     (async () => await fetchItems())()
   }, 2000)
    //fetch_Items()
   
  },[])
   




  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(newItem)
    addItem(newItem)
    setNewItem('')
  }


  const addItem = async (item) => {
    const id = items.length? String(Number(items[items.length -1].id) +1) : 1
    const addNewItem = {id, checked:false, item}
    const listItems = [...items, addNewItem]
    setItems(listItems)
    // localStorage.setItem("todo_list", JSON.stringify(listItems))

    // console.log(id)

    const postOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addNewItem)
    }

    const result = await apiRequest(API_URL, postOptions)

    if(result) setFetchError(result)

  } 


  const handleCheck = async (id) => {
    const ListItems = items.map((item) => item.id === id ? {...item, checked:!item.checked} : item)
    setItems(ListItems)
    localStorage.setItem("todo_list", JSON.stringify(ListItems))

    const myItem = ListItems.filter(item => item.id===id)

    console.log(myItem[0].checked)

    const updateOption = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({checked: myItem[0].checked})
    }
    
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, updateOption)

    if(result) setFetchError(result)

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

    < SearchItem 
      search = {search}
      searchItem = {searchItem}
    />
    <main>
      {fetchError && <p>{`Error: ${fetchError}`}</p>}
      {loading && <p>{`Loading items.......`}</p>}
       {!loading && !fetchError && <Content 
        items = {items.filter(item => ((item.item).toLowerCase().includes(search.toLowerCase())))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />}
    </main>
   
    <Footer 
    length = {items.length}
    />
    </>
    
  </div>
)

  
}

export default App;
