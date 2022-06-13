import { useState } from 'react';
import { useAuth } from '../contex/authContext.js';
import { useNavigate } from 'react-router-dom'
import  logotext  from '../img/logotext.png';

export function Register() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signUp(user.email, user.password)
      navigate('/')
    } catch (error) {
      console.log(error.code);
      if (error.code === 'auth/invalid-email') {
        setError('Correo inválido')
      }
      if (error.code === 'auth/weak-password') {
        setError('La contraseña debe contener mínimo 6 caracteres')
      }
      if (error.code === 'auth/email-already-in-use') {
        setError('Cuenta registrada')
      }
    }

  };

  return (
    <section className='Content-register'>
      <img src={logotext} className='Logotext-register' alt='text' />
      <h1 className='Title-register'>Registro</h1>

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
          <button>Regístrate</button>
          {error && <p>{error}</p>}
        </div>

      </form>
    </section>
  );
}
