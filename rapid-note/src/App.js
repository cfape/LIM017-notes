/* eslint-disable no-unused-vars */
import React from 'react';
import './component/Home.css';
import Home  from  './component/Home.js'
//import Button from './components/Button.js'
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
    </Routes>
    </Router>
  );
}

export default App;