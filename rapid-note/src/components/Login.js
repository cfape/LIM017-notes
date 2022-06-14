import { useState } from 'react';
import { useAuth } from '../contex/authContext.js';
import { Link, useNavigate } from 'react-router-dom';
import logotext from '../img/logotext.png';

export function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate('/rapidnote');
    } catch (error) {
      console.log(error.code);
      if (error.code === 'auth/invalid-email') {
        setError('Correo inválido');
      } else if (error.code === 'auth/weak-password') {
        setError('La contraseña debe contener mínimo 6 caracteres');
      } else if (error.code === 'auth/user-not-found') {
        setError('El correo no está registrado');
      }
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate('/rapidnote');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className='Content-register'>
      <img src={logotext} className='Logotext-register' alt='text' />

      <form onSubmit={handleSubmit} className='Form-register'>
        <label htmlFor='text'>Email </label>
        <input
          type='email'
          name='email'
          placeholder='correo@ejemplo.com'
          onChange={handleChange}
        />

        <label htmlFor='password'>Password </label>
        <input
          type='password'
          name='password'
          placeholder='******'
          onChange={handleChange}
        />

        <div className='Content-btn-register'>
          <button>Inicia Sesión</button>
          {error && <p>{error}</p>}
          <Link to='/' className='App-link'>
            Volver al inicio
          </Link>
        </div>
      </form>

      <button className='BtnGoogle' onClick={handleGoogleSignin}>Acceder con Google</button>
    </section>
  );
}
