
import React, { createContext, useEffect, useState } from "react";
import useFirebase from "../config/useFirebase";



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } = useFirebase()
    const auth = getAuth()

    
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [error, serError] = useState("")
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, provider).then(()=> serError('')).catch(err=> serError(err.message));
    };
    const handleSingOut = () => {
        return signOut(auth);
    };


    useEffect(() => {
        onAuthStateChanged(auth, result => {
            if (result) {
                const { displayName, email, photoURL } = result;
                const signInUserInfo = {
                    name: displayName,
                    email,
                    userPhoto: photoURL,
                };
                setLoggedInUser(signInUserInfo);
            } else {
                setLoggedInUser(null);
            }
        })

    }, [auth, onAuthStateChanged]);

    const value = {
        loggedInUser,
        setLoggedInUser,
        handleGoogleSignIn,
        handleSingOut,
        error
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


