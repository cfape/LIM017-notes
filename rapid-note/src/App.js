import './components/Home.css';
import './components/Register.css';
import './components/Login.css';
import './components/Note.css';
import './components/Notes.css';
import './components/Header.css';
import React from 'react';
import { Home }  from  './components/Home.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js'
import { AuthProvider } from './contex/authContext.js';
import { Header } from './components/Header.js';
import { Notes } from './components/Notes.js';
import {
  BrowserRouter,
  Routes,
  Route
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
            <Route path='/rapidnote' element={<><Header /> <Notes /></>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;