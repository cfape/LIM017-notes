
import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Home }  from  './components/Home.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js'
import { Header } from './components/Header.js';
//import { useAuth } from './contex/authContext.js';
//import { ModalNotes} from './components/ModalNotes.js';
import { Notes } from './components/Notes.js';
import './components/Home.css';
import './components/Register.css';
import './components/Login.css';
import './components/Notes.css';
import './components/Header.css';

function App() {

const [user, setUser] = useState({
  email: localStorage.getItem("email"),
  password: "",
});

  return (
        <BrowserRouter>
          <Routes>
            <Route path='/LIM017-notes/' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/login/' element={<Login  user={user} setUser = {setUser}/>} />
            <Route path='/register/' element={<Register />} />
            <Route path='/rapidnote/' element={
            user.email === null ? (<Home  />) : (<><Header user={user} setUser = {setUser} /> <Notes/> </>)
            } />
          </Routes>
        </BrowserRouter>
  );
}

export default App;