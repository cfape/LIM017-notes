import React, { useState, useEffect } from "react";
import { db, updateNote} from "../Firebase/firebaseConfig.js";
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

export const Notes = (props) => {
  const initialStateValues = {
    title: "",
    description: "",
    author: localStorage.getItem("email"),

  };
  const [values, setValues] = useState(initialStateValues);
  const [currentId, setCurrentId] = useState('');
  const [notes, setNotes] = useState([]);

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
      console.log("No such document!");
    }
    setValues({ ...docSnap.data()})
  }


  const addnote = async (objectNote) => {
    console.log(currentId);
    if (currentId === '') {
      const docRef = await addDoc(collection(db, "notes"), objectNote);
      console.log("Document written with ID: ", docRef.id);
    } else {
      await updateNote(currentId, objectNote.title, objectNote.description).then(() => {
        getNotes();
      })
    }
  };

  const getNotes = async () => {
    const q =  query(
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

    useEffect(() => {
      const initialStateValues = {
        title: "",
        description: "",
        author: localStorage.getItem("email"),
      };
      if (currentId === '') {
        setValues({...initialStateValues});
      } else {
        getNoteById(currentId)
      }
      getNotes()
    }, [currentId]);


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
          <button className="btnPrimary">{currentId === '' ? 'Guardar': 'Guardar'}</button>
        </div>
      </form>

      <div>
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
                    <img src={editNote} className="editNote" alt="btn" />
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
                  className="editTitleLoad"
                  onChange={handleInputChange}
                  value={note.title}
                />
                <textarea
                  className="editDescriptionLoad"
                  onChange={handleInputChange}
                  rows="5"
                  value={note.description}
                >
                </textarea>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>);
};
