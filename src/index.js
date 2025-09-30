import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Garage from './components/Garage'
import reportWebVitals from './reportWebVitals';

import State from './components/State';
import Bike from  './components/Bike';
import Scooter from  './components/Scooter';
import List from './components/List';
import Timer from './components/Timer';
import MyForm from './components/Myform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
    
    {/* <Garage /> */}
    {/* <Header/> */}
    {/* <State/>
    <Bike />
    <Scooter/>
    <List/> */
    // <Timer/>
    // <MyForm />
    }

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
