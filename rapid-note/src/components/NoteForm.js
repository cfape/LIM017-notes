/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
import React, { useState} from "react";
import cat1 from "../img/cat1.gif";
//{addNote, currentId, editTitle, editDescription}

export function Note(props) {
  const initialStateValues = {
    title: "",
    description: "",
    author: localStorage.getItem("email"),
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  /*const handleSubmit = (e) => {
    e.preventDefault();
    props.addNote(values);
    setValues({ ...initialStateValues });
  };
*/
/*
  useEffect(() => {
    console.log(addNote);
    if (addNote.currentId === '') {
      setValues({...initialStateValues});
    } else {
      console.log('editing');
    }
  }, []); */

  return (
    <div className="Container-rapid-note">
      <div className="Content-cat">
        <img src={cat1} className="catNote" alt="cat" />
      </div>
      <form className="Container-note-form">
        <div className="Container-note">
          <div className="input-group-text">
            <p className="titleAddNote">Agregar nota</p>
            <input
              type="text"
              name="title"
              className="formTitleNote"
              placeholder="Título"
              onChange={handleInputChange}
              value={values.title}
            />
            <div className="input-group-textarea">
              <textarea
                className="textareaNote"
                name="description"
                rows="4"
                placeholder="Escribe una nota"
                onChange={handleInputChange}
                value={values.description}
              ></textarea>
            </div>
          </div>
          <button className="btnPrimary">Guardar nota</button>
        </div>
      </form>
    </div>
  );
}