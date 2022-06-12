import { useState } from 'react';

export function Login() {

  const [user, setUser ] = useState({
    email: '',
    password: ''
  })

  return <div>

    <form>

      <imput type='email' name='email' id='email' />

      <imput type='password' name='password' id='pasword' />

    </form>

  </div>;
}


/*<button
      id="btnHome"
      className={props.btnOnClick}
      onClick={() => onClickButton('Aquí se debe abrir un modal')}>
      {props.text}
    </button>*/