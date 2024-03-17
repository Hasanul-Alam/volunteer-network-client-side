import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState();

    // Google provider
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            setUser(result.user.email)
            setError('')
            window.location('/home')
        })
        .catch(error => setError(error.message))
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            alert('Alhamdulillah sign-out successfull.');
            setUser({});
        })
        .catch(error => {
            setError(error.message)
        })
    }

    // On Auth State Changed
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])
    

    return {
        user,
        error,
        googleSignIn,
        logOut
    }
};

export default useFirebase;