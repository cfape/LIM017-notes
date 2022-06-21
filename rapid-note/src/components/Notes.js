import React, { useEffect, useState } from "react";
import { Note } from "./Note.js";
import { db } from "../Firebase/firebaseConfig.js";
import { addDoc, collection, getDocs } from "firebase/firestore";

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
      console.log(doc.id, '=>', doc.data());
    })
    setNotes(docs);
  };


  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <div className='col-md-4'>
        <Note addOrEditNote={addOrEditNote} />
      </div>
      </div>
  )
};
