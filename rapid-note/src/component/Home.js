import React from 'react';
//import { useAuth } from '../contex/authContext.js'
import logo from '../img/logo.png';
import logotext from '../img/logotext.png';

export function Home() {
  return (

    <div className='Container-home'>
      <div className='Content-home'>
        <img src={logotext} className='App-logotext' alt="text" />
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='Title-home'>Escribe tus notas, sin temor a perderlas</h1>
      </div>
    </div>
  );
}
      /*<div className='Container-btn'>
        <Button
          text='¡Bienvenidx!'
          className='btnOnClick'
          onClick='onClick'
        ></Button>
        </div>*/