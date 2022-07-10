import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contex/authContext.js';
import  logotext  from '../img/logotext.png';

export function Header() {

  const {user, logOut, loading} = useAuth ()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
    await logOut()
    navigate('/');
  } catch (error) {
    console.error(error)
  }
};

  if (loading) return <h1>loading</h1>

  return (
    <div className='Container-HeaderRapidNote'>
    <div className='Content-HeaderInfo'>
    <img src={logotext} className='LogoHeader' alt='img' />
    <h3>Hola, {user.displayName || user.email}</h3>
    </div>
    <div className='Content-BtnLogOut'>
    <button className='BtnLogOut' onClick={handleLogout}>
      Cerrar Sesión
    </button>
    </div>

    </div>
  );
}

