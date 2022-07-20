import { updateNote} from "../Firebase/firebaseConfig.js";
import "./Modal.css";

export function Modal(props) {
//console.log(props);
  const toggleModal = () => {
    props.setModal(!props.modal);
  };

  const updateNoteModal = (objectNote) => {
    updateNote(props.note, objectNote.title, objectNote.description).then(() => {
    })
  }
  const handleInputChangeModal = (e) => {
    const { name, value } = e.target;
    props.setValues({ ...props.values, [name]: value });
  };

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
        onChange = {handleInputChangeModal}
        value={props.values.title}
      />
      <textarea
        className="textareaModal"
        name="description"
        rows="4"
        placeholder="Edita tu nota"
        onChange= {handleInputChangeModal}
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
      onClick={()=>{toggleModal(); updateNoteModal(props.values)}}
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
