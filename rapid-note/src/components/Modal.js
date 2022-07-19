import React, { useState} from "react";
import './Modal.css';

export function Modal({children}){

	const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }
  console.log(children)
  return (

	<>
  {children}

	</>
	);

}

/*<button
	onClick={toggleModal}
	className='btn-Modal'>
		Open
	</button>

	<div className='modal'>
		<div
    onClick={toggleModal}
    className='overlay'>
    </div>
    <div className='modal-content'>
      <h1>Editar Nota</h1>
      <p>
        Hola
      </p>
      <button
      className='close-modal'
      onClick={toggleModal}
      >Cerrar</button>
    </div>

	</div>
*/