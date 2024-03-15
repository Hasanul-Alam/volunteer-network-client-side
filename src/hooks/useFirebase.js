import { useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState();
    const [error, setError] = useState();

    // Google provider
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => setUser(result.user))
        .catch(error => setError(error.message))
    }

    return {
        user,
        error,
        googleSignIn
    }
};

export default useFirebase;