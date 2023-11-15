import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
    return  signOut(auth); 
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
         console.log(currentUser); 
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
    logOut

}



    return (
      <AuthContext.Provider value={authInfo}>
        {children} 
      </AuthContext.Provider>
    );
};

export default AuthProvider;