import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
  } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig.js';

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('No hay usuario');
  return context
}

export const signUp = ( email, password) =>
    createUserWithEmailAndPassword( auth, email, password);
    console.log('hola')

export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
console.log('borrar');


export   const loginWithGoogle = () => {
  console.log('borrarte');
  const googleProvider = new GoogleAuthProvider()
  return signInWithPopup(auth, googleProvider)
  }

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const logOut = () => signOut(auth);
  console.log('sirve');

    useEffect (() => {
      onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false)
      })
    },[])

  return (
  <authContext.Provider value={{ user, logOut, loading }}>{children}</authContext.Provider>
  );
}
