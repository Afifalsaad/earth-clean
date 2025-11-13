import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setLoading(true)
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const setNameAndPhoto = (displayName, photoURL) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      });
    }
  };

  const signIn = (email, password) => {
    
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    // setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const googleLogIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const authData = {
    signIn,
    logIn,
    googleLogIn,
    user,
    logOut,
    loading,
    setNameAndPhoto,
    setLoading,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
