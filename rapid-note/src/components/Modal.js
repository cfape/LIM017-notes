import React, { useState } from "react";
import { db} from "../Firebase/firebaseConfig.js";
import {
  getDoc,
  doc,
} from "firebase/firestore";
import "./Modal.css";
import { useEffect } from "react";

export function Modal(props) {
  console.log('entro al modal', props);
  // const [note, setNote] = useState({})
  // const [modal, setModal] = useState(false);

  const toggleModal = () => {
    props.setModal(!props.modal);
  };

  const handleInputChangeModal = (e) => {
    const { name, value } = e.target;
    props.setValues({ ...props.values, [name]: value });
  };


  // console.log(children);
  //return <>{children}</>;
//}

// const getNoteById = async  (id) => {
//   const docRefId = doc(db, "notes", id);
//   const docSnap = await getDoc(docRefId);
// console.log(docSnap.exists());
//   if (docSnap.exists()) {

//     console.log("Document data:", docSnap.data());
//     return docSnap.data()
//     //
//   } else {
//     console.log("No such document!");
//   }
//   //
// }
useEffect(()=>{
  // getNoteById(props.note)
})
  return (

  <>

  {props.modal && (
	<div className='modal'>
		<div
    onClick={toggleModal}
    className='overlay'>
    </div>
    <div className='modal-content'>
      <input
        type="text"
        name="title"
        className="formTitleModal"
        placeholder='Título'
        //onChange = {handleInputChangeModal}
        value={props.values.title}
      />
      <textarea
        className="textareaModal"
        name="description"
        rows="4"
        placeholder="Edita tu nota"
        //onChange= {handleInputChangeModal}
        value={props.values.description}
      ></textarea>

      <button
      className='close-modal'
      onClick={toggleModal}
      >
      Cerrar
      </button>

      <button
      className='close-modal'
      onClick={toggleModal}
      >
      Actualizar
      </button>
    </div>
	</div>
  )}

  </>

  );
  }



  /*<button
    data-noteid={note.id}
    className="editNote"
    onClick={() => setCurrentId(note.id)}
    >
    <img src={editNote} className="editNote" alt="btn" />
  </button>*/
