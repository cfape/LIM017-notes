import React from "react";
import logo from "../img/logo.png";
import logotext from "../img/logotext.png";
import Button from "./Button.js";

function Register() {
  return (
    <div className="Container-home">
      <div className="Content-home">
        <img src={logotext} className="App-logotext" alt="text" />
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="Title-home">Escribe tus notas, sin temor a perderlas</h1>
      </div>
      <div className="Container-btn">
        <Button
          text="¡Bienvenidx!"
          btnOnClick="btnOnClick"
          listenClick=""
        ></Button>
      </div>
    </div>
  );
}

export default Register;
