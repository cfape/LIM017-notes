import React, { useEffect, useState } from "react";
import { Note } from "./Note.js";
import { db } from "../Firebase/firebaseConfig.js";
import { addDoc, collection, getDocs } from "firebase/firestore";
import logNote from "../img/logNote.png";
import closeNote from "../img/closeNote.png";


export const Notes = () => {

  // eslint-disable-next-line no-unused-vars
  const [notes, setNotes]= useState([]);

  const addOrEditNote = async (objectNote) => {
    try {
      const docRef = await addDoc(collection(db, "notes"), objectNote);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const getNotes = async () => {
    const querySnapshot = await getDocs(collection(db, "notes"))
    const docs = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().author === localStorage.getItem('email')){
      docs.push({...doc.data(), id:doc.id})
      }
    })
    setNotes(docs);
  };


  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>

      <Note addOrEditNote={addOrEditNote} />
      <div className="notesList">
      <img src={logNote} className="logNote" alt="img" />
        {notes.map((note) => (
          <div className="notesContent" key={note.id}>
            <div className="noteCard">
              <img src={closeNote} className="closeNote" alt="img" />
              <h5>{note.title}</h5>
              <p>{note.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
