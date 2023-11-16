import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth (app); 

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null); 
const [loading, setLoading] = useState(true); 

const createUser = (email, password) => {
    setLoading(true); 
   return  createUserWithEmailAndPassword(auth, email, password) 
}

const signInUser = (email, password) => {
    setLoading(true); 
   return  signInWithEmailAndPassword(auth, email, password)

}

const logOut = () => { 
    setLoading(true); 
    return signOut(auth); 
}

const updateUserProfile = (name, photo) => {
    return updateProfile (auth.currentUser, {
        displayName: name, photoURL: photo 
      });
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser); 
         setLoading(false); 
    }); 
 
    return () => {
        return unsubscribe(); 
    }

}, [])


const authInfo = {
    user, 
    loading,
    createUser,
    signInUser,
    logOut,
    updateUserProfile

}



    return (
      <AuthContext.Provider value={authInfo}>
        {children} 
      </AuthContext.Provider>
    );
};

export default AuthProvider;