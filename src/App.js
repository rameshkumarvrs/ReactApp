

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
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return(
    <>
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
   </BrowserRouter>
    </>
    
  )
  

}

export default App;
