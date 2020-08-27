import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';

import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
    </BrowserRouter>
  );
}

export default App;
