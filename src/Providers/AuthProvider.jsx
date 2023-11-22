import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
const auth = getAuth (app); 

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null); 
const [loading, setLoading] = useState(true); 

const  googleProvider = new GoogleAuthProvider();
const axiosPublic = useAxiosPublic(); 



const createUser = (email, password) => {
    setLoading(true); 
   return  createUserWithEmailAndPassword(auth, email, password) 
}

const googleSignIn = () => {
     setLoading(true); 
     return signInWithPopup(auth, googleProvider); 
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
        if(currentUser){
        const userInfo = {
            email: currentUser.email 
        }; 
          axiosPublic.post("/jwt", userInfo)
          .then(res => {
             if(res.data.token){
                localStorage.setItem("access token", res.data.token); 
             }
          })
           
        } else{
          localStorage.removeItem("access token"); 
        }
         setLoading(false); 
    }); 
 
    return () => {
        return unsubscribe(); 
    }

}, [axiosPublic]) 


const authInfo = {
    user, 
    loading,
    createUser,
    googleSignIn, 
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