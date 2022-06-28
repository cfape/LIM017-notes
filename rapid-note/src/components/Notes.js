/* eslint-disable no-undef */

import React, { useState } from "react";
//import { Note } from "./NoteForm.js";
import { db } from "../Firebase/firebaseConfig.js";
import {
  addDoc,
  collection,
  onSnapshot,
  where,
  query,
  deleteDoc,
  doc
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
    // eslint-disable-next-line no-unused-vars
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      addnote(values);
      setValues({ ...initialStateValues });
    };

  const [notes, setNotes] = useState([]);

  const addnote = async (objectNote) => {
    try {
      const docRef = await addDoc(collection(db, "notes"), objectNote);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  /*const handleClickEdit = () => {
    setValues(currentValues => {
      currentValues.title = editTitle;
      currentValues.description = editDescription;
      return ({...currentValues})
    })
  };*/
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

  /*const onEditNote = async (id, title, description) => {
    console.log("estoy entrando a edit");
    try {
      const editNoteRapid = await updateDoc(doc(db, "notes", id), {
        title: title,
        description: description,
      });
      console.log(editNoteRapid);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };*/

  //useEffect(() => {
  //  getNotes();
  //}, []);

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
          <button className="btnPrimary">Guardar nota</button>
        </div>
      </form>

      <div addnote={'addnote'}>
        <div className="notesList">
          {notes.map((note) => (
            <div className="notesContent" key={note.id}>
              <div className="noteCard">
                <div className="contentBtnEdit">
                  <button
                    data-noteid={note.id}
                    className="editNote"
                    //onClick={onEditNote(note.id, note.title, note.description)}
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
                <h5>{note.title}</h5>
                <p>{note.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
