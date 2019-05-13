import React from 'react';
import {BrowserRouter ,Route } from 'react-router-dom';
import Home from './Components/Home';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';


function App() {
  return (
    <BrowserRouter>
      <Route path = "/" component ={Home} exact />
    </BrowserRouter>
  );
}

export default App;
