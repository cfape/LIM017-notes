import React, { useState, useEffect } from "react";
import { db } from "../Firebase/firebaseConfig.js";
import {
  addDoc,
  collection,
  onSnapshot,
  where,
  query,
  deleteDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import closeNote from "../img/closeNote.png";
import editNote from "../img/editNote.png";
import cat1 from "../img/cat1.gif";

export const Notes = () => {
  const initialStateValues = {
    title: "",
    description: "",
    author: localStorage.getItem("email"),
  };
  const [values, setValues] = useState(initialStateValues);
  const [currentId, setCurrentId] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addnote(values);
    setValues({ ...initialStateValues });
  };

  const getNoteById = async (id) => {
    const docRefId = doc(db, "notes", id);
    const docSnap = await getDoc(docRefId);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    setValues({ ...docSnap.data()})
  }

  useEffect(() => {
    console.log(currentId)
    if (currentId === '') {
      setValues({...initialStateValues});
    } else {
      getNoteById(currentId)
    }
  }, [currentId]);


  const [notes, setNotes] = useState([]);

  const addnote = async (objectNote) => {
    if (currentId === '') {
      const docRef = await addDoc(collection(db, "notes"), objectNote);
      console.log("Document written with ID: ", docRef.id);
    } else {
      addDoc(collection(db, "notes"), objectNote);
    }
  };

  const getNotes = async () => {
    const q = query(
      collection(db, "notes"),
      where("author", "==", localStorage.getItem("email"))
    );
    onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setNotes(docs);
    });
  };
  getNotes();

  const onDeleteNote = (id) => {
    deleteDoc(doc(db, "notes", id));
  };

    useEffect (() => {
      getNotes();
    }, []);
  /*const [editNoteSelected, setEditNoteSelected] = useState(0);
  const onEditNote = async (e, note, index) => {
    e.preventDefault();
    console.log(index);
    console.log(editNoteSelected);
    setEditNoteSelected(index);
    await updateNote(e, note, index);
    };*/

   
  return (
    <div className="Container-rapid-note">
      <div className="Content-cat">
        <img src={cat1} className="catNote" alt="cat" />
      </div>
      <form className="Container-note-form" onSubmit={handleSubmit}>
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
          <button className="btnPrimary">{currentId === '' ? 'Guardar': 'Actualizar'}</button>
        </div>
      </form>

      <div addnote {...{addnote, currentId, notes}}>
        <div className="notesList">
          {notes.map((note) => (
            <div className="notesContent" key={note.id} id={note.id}>
              <div className="noteCard">
                <div className="contentBtnEdit">
                  <button
                    data-noteid={note.id}
                    className="editNote"
                    onClick={() => setCurrentId(note.id)}
                  >
                    <img src={editNote} className="closeNote" alt="btn" />
                  </button>
                </div>
                <div className="contentBtnClose">
                  <button
                    className="btnClose"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteNote(note.id);
                    }}
                  >
                    <img src={closeNote} className="closeNote" alt="btn" />
                  </button>
                </div>
                <input
                  //disabled={editNoteSelected !== index}
                  className="editTitleLoad"
                  value={note.title}
                />
                <textarea
                  //disabled={editNoteSelected !== index}
                  className="editDescriptionLoad"
                  rows="5"
                >
                  {note.description}
                </textarea>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// boton en render
/*<div className="contentBtnLoad">
                  <button
                    onClick={() => handleClickEdit(note)}
                    className="btnLoad"
                  >
                    Actualizar
                  </button>
                </div> */

// esto va luego de addnote antes del render
/* const handleClickEdit = (note) => {
    console.log("note", note);
  }; */

// index va en el maps al lado de notes