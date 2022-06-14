import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contex/authContext.js";
import logotext from "../img/logotext.png";

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
    <div>
    <img src={logotext} className='Logotext-register' alt='text' />
    <h1>Bienvenidx {user.displayName ||user.email}</h1>
    <button onClick={handleLogout}>
      Cerrar Sesión
    </button>
    </div>
  );
}
