import React, { useState } from "react";
import cat from "../img/cat.gif";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEditNote(values);
    setValues({ ...initialStateValues });
  };

  return (
    <form className="Container-note-form" onSubmit={handleSubmit}>
      <div className="Container-note">
        <div className="Content-cat">
          <img src={cat} className="catNote" alt="cat" />
        </div>
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
              rows="6"
              placeholder="Escribe una nota"
              onChange={handleInputChange}
              value={values.description}
            ></textarea>
          </div>
        </div>

        <button className="btn btn-primary btn-block">Guardar Nota</button>
      </div>
    </form>
  );
}
