import { useState } from "react";
import { useAuth } from "../contex/authContext.js";
import { useNavigate } from "react-router-dom";
import logotext from "../img/logotext.png";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/rapidnote");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Correo inválido");
      }
      if (error.code === "auth/weak-password") {
        setError("La contraseña debe contener mínimo 6 caracteres");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("Este correo ya está registrado");
      }
    }
  };

  return (
    <section className="Content-register">
      <img src={logotext} className="Logotext-register" alt="text" />

      <form onSubmit={handleSubmit} className="Form-register">

        <label htmlFor="text">Email </label>
        <input
          type="email"
          name="email"
          placeholder="correo@ejemplo.com"
          onChange={handleChange}
        />

        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          placeholder="******"
          onChange={handleChange}
        />

        <div className="Content-btn-register">
          <button>Inicia Sesión</button>
          {error && <p>{error}</p>}
        </div>
      </form>
    </section>
  );
}
