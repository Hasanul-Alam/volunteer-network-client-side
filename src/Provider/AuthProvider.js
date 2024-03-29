import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(true);

    // Google provider
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    // Google Sign-In
    const googleSignIn = () => {
        setLoading(true);
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user.email)
                setError('')
                window.location('/home')
            })
            .catch(error => setError(error.message))
    }

    // Email Password Sign-Up
    const emailPasswordSignUp = () => {
        setLoading(true);
        if (email === '' || password === '') {
            alert('Plese provide a valid email and a strong password.')
        }
        else if (password !== confirmPassword) {
            setError('Please carefully put your passwords.');
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    setUser(result.user)
                    setError('');
                    alert('Alhamdulillah your account is successfully created.');
                    window.location = '/home'
                })
                .catch(error => setError(error.message))
        }
    }

    // Email Password Sign-In
    const emailPasswordSignIn = () => {
        setLoading(true);
        if (email === '' || password === '') {
            alert('Please provide your email & password.');
        }
        else {
            signInWithEmailAndPassword(auth, email, password)
                .then(result => {
                    setUser(result.user);
                    setError('');
                    window.location = '/home';
                })
                .catch(error => setError(error.message))
        }
    }

    // Log-Out
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                alert('Alhamdulillah sign-out successfull.');
                setUser({});
            })
            .catch(error => {
                setError(error.message)
            })
    }

    /* ---------------------
        Handle Input Fields
    -------------------------*/
    // Handle Email Change
    const handleEmailChange = (event) => {
        const email = event.target.value;
        setEmail(email);
    }

    // Handle Password Change
    const handlePasswordChange = (event) => {
        const password = event.target.value;
        setPassword(password);
    }

    // Handle Confirm Password
    const handleConfirmPassword = (event) => {
        const confirmedPassword = event.target.value;
        setConfirmPassword(confirmedPassword);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
                setLoading(false);
            }
            else{
                setLoading(false);
            }
        })
    }, [])


    const authInfo = {
        user,
        error,
        loading,
        googleSignIn,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        handleConfirmPassword,
        emailPasswordSignUp,
        emailPasswordSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;