

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react'
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import './App.css';

import Result from './components/Result';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import OldBooks from './components/OldBooks';
import NewBooks from './components/NewBooks';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return(
    <>
    
   <BrowserRouter>
   <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">contact</Link></li>
       <li><Link to="/user/1">User</Link></li>
        <li><Link to="/user/2">User</Link></li>
         <li><Link to="/books/old_books">Old book</Link></li>
         <li><Link to="/books/new_books">New book</Link></li>
    </ul>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/user/:id' element={<User/>} />
        <Route path='/books'>
           <Route path='old_books' element={<OldBooks/>} />
        <Route path='new_books' element={<NewBooks/>} />
        </Route>
    </Routes>
   </BrowserRouter>
    </>
    
  )
  

}

export default App;
