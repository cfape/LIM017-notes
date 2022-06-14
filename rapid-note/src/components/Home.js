import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contex/authContext.js';
import logo from '../img/logo.png';
import logotext from '../img/logotext.png';


export function Home() {

  const { user } = useAuth()
  console.log(user);

  const navigate = useNavigate();
  const btnLogin = () => {
    navigate('/login');
    }

  return (
    <div className='Container-home'>
      <div className='Content-home'>
        <img src={logotext} className='App-logotext' alt="text" />
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='Title-home'>Escribe tus notas, sin temor a perderlas</h1>
      </div>
      <div className='Content-btn'>
        <button onClick={btnLogin} className='Btn-home'>Iniciar Sesión</button>
      </div>
      <div className='Content-link'>
        <Link to='/register' className='App-link'>Regístrate</Link>
      </div>
      </div>
  );
}
