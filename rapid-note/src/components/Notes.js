/* eslint-disable no-undef */
import React, { useState } from "react";
import { Note } from "./Note.js";
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

export const Notes = () => {
  // eslint-disable-next-line no-unused-vars
  const [notes, setNotes] = useState([]);

  const addOrEditNote = async (objectNote) => {
    try {
      const docRef = await addDoc(collection(db, "notes"), objectNote);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const onDeleteNote = (id) => {
    console.log(id);
    deleteDoc(doc(db, 'notes', id))
  }

  const getNotes = async () => {

    const q = query(collection(db, "notes"), where("author", "==", localStorage.getItem("email")));
    onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id:doc.id});
      });
      setNotes(docs);
    });
  };
    getNotes();
  //useEffect(() => {
  //  getNotes();
  //}, []);

  return (
    <div>
      <Note addOrEditNote={addOrEditNote} />
      <div className="notesList">
        {notes.map((note) => (
          <div className="notesContent" key={note.id} >
            <div className="noteCard">
              <button
                className="BtnClose"
                onClick = {(e)=> {e.stopPropagation(); onDeleteNote(note.id)}}
              >
                <img src={closeNote} className="closeNote" alt="btn" />
              </button>
              <h5>{note.title}</h5>
              <p>{note.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
