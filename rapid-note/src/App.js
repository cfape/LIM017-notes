/* eslint-disable no-unused-vars */
import React from 'react';
import './component/Home.css';
import './component/Button.css';
import Home  from  './component/Home.js';
import Register from './component/Register.js'
import Login from './component/Login.js';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='login' element={<Login/>} />
    </Routes>
    </Router>
  );
}

export default App;