/* eslint-disable no-unused-vars */
import React from 'react';
import { Home }  from  './components/Home.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js'
import { RapidNote } from './components/RapidNote.js'
import { AuthProvider } from './contex/authContext.js';
import './components/Home.css';
import './components/Register.css';
import './components/Login.css';
import './components/RapidNote.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <div className='App-route'>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/rapidnote' element={<RapidNote />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;