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
  if (!context) throw new Error('There is no auth provider')
  return context
}

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = ( email, password) =>
    createUserWithEmailAndPassword( auth, email, password);

    const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

    const logOut = () => signOut(auth);

    const loginWithGoogle = () => {
      const googleProvider = new GoogleAuthProvider()
      return signInWithPopup(auth, googleProvider)
    }

    useEffect (() => {
      onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false)
      })
    },[])

  return (
  <authContext.Provider value={{ signUp, login, user, logOut, loading, loginWithGoogle }}>{children}</authContext.Provider>
  );
}
