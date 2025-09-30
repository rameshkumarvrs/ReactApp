

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react'
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import './App.css';

import Result from './components/Result';
const secretNum = Math.floor(Math.random() * 10) + 1;

function App() {
const [term, setTerm] = useState()


const handleChange = (e) => {
  
   setTerm(e.target.value)
  //  console.log("setvalue", term)
}

return (
  <div className='container'>
    <div className='head'>
      <label htmlFor="term">Guess the number between 1 to 10 answer {secretNum}</label>
    </div>

    <input  
      id= "term"
      type='text'
      name='term'
      onChange={handleChange}
    />
  

    <Result secretNum={secretNum} term={term} />

  </div>
);
}

export default App;
