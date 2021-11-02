import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import firebaseConfig from "./firebase.Config";

    
    const useFirebase = () => {
     initializeApp(firebaseConfig);
        return {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut}
    };
    
    export default useFirebase;