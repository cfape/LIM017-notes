import React, { useEffect } from "react";
import { Note } from "./Note.js";
import { db } from "../Firebase/firebaseConfig.js";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const Notes = () => {
  const addOrEditNote = async (objectNote) => {
    console.log("addOrEditNote", objectNote);

    try {
      const docRef = await addDoc(collection(db, "notes"), objectNote);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getNotes = async () => {
    const querySnapshot = await getDocs(collection(db, "notes"))
    querySnapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    })
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <Note addOrEditNote={addOrEditNote} />
      <h1>Lista de Notas</h1>
    </div>
  );
};
