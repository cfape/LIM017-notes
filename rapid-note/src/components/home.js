import React from 'react';
import "./home.css";

function home() {
    return (
    <div className="home">
        <div id='welcome" class="welcomeForm'>
          <div className="title-home">
            <p className="title"> ¡Bienvenid@!</p>
          </div>
          <div className="welcome-wrapper">
            <div className="textWelcome">
              <p>
                Somos una comunidad de viajer@s conectados alrededor del mundo,
                sé parte de esta gran familia
              </p>
            </div>
            <button className="btnUnete">Crea tu cuenta</button>
            <button className="btnIniciar">Iniciar Sesion</button>
          </div>
        </div>
      </div>
  );
}

export default home;
