import logotext from "../img/logotext.png";


export function Register() {
  return (
    <section className="Container-register">
      <section className="Content-register">
        <img src={logotext} className="Logotext" alt="text" />
        <h1 className='Title-register'>Registro</h1>
        <form>
          <label for='nameUser'>Nombre</label>
          <input type='text'></input>
        </form>
      </section>
    </section>
  );
}

