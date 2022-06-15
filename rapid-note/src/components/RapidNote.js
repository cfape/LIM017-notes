import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contex/authContext.js';
import logNote from '../img/logNote.png';

export function RapidNote() {

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
    <div className='Container-RapidNote'>
    <div className='Content-Info'>
    <img src={logNote} className='LogNote' alt='img' />
    <h3>Bienvenidx {user.displayName ||user.email}</h3>

    <button onClick={handleLogout}>
      Cerrar Sesión
    </button>
    </div>

    <div className='Content-Note'>
    </div>

    </div>
  );
}
