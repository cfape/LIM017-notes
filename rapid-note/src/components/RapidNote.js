import React, { useState } from "react";
import cat from '../img/cat.gif';


export function RapidNote() {

    const initialStateValues = {
      title: '',
      description: ''
    }

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = e => {
      const { name, value } = e.target;
      setValues({...values, [name]: value})
    }

    const handleSubmit = e => {
      e.preventDefault();
      console.log(values)
    }

  return (
    <form className='Container-note-form' onSubmit={handleSubmit}>
      <div className='Content-cat'>
        <img src={cat} className='cat-register' alt='cat' />
      </div>
        <div className='input-group-text'>
          <input
          type='text'
          name='title'
          className='formTitleNote'
          placeholder='Título'
          onChange={handleInputChange}
          />
          <div className='input-group-textarea'>
            <textarea
            className='textareaNote'
            name='description'
            rows='6'
            placeholder='Escribe una nota'
            onChange={handleInputChange}
            >
            </textarea>
          </div>
        </div>

        <button className='btn btn-primary btn-block'>
          Crear Nota
        </button>
    </form>
  );
}
