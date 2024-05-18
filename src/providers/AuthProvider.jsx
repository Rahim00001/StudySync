import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('current user', currentUser);
            if (currentUser) {
                // get token
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
                // remove token
                localStorage.removeItem('access-token')
            }
            setLoading(false)
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
        googleLogin,
        logOutUser,
        updateUserProfile,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// import { createContext, useEffect, useState } from "react";
// import {
//     GoogleAuthProvider,
//     createUserWithEmailAndPassword,
//     getAuth,
//     onAuthStateChanged,
//     sendPasswordResetEmail,
//     signInWithEmailAndPassword,
//     signInWithPopup,
//     signOut,
//     updateProfile
// } from "firebase/auth";
// import { app } from "../firebase/firebase.config";
// export const AuthContext = createContext(null);

// const auth = getAuth(app);

// // eslint-disable-next-line react/prop-types
// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const googleProvider = new GoogleAuthProvider();

//     // create user
//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//     // SignIn User
//     const signInUser = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     // SignIn with Google
//     const googleLogin = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     }

//     // reset password
//     const resetPassword = (email) => {
//         setLoading(true)
//         return sendPasswordResetEmail(auth, email)
//     }

//     // logout User
//     const logOutUser = () => {
//         setLoading(true);
//         return signOut(auth);
//     }

//     // Update user
//     const updateUserProfile = (name, photo) => {
//         return updateProfile(auth.currentUser, {
//             displayName: name, photoURL: photo
//         })
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser);
//             console.log('current user', currentUser);
//             setLoading(false)
//         });
//         return () => {
//             return unsubscribe();
//         }
//     }, [])


//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         signInUser,
//         googleLogin,
//         logOutUser,
//         updateUserProfile,
//         resetPassword,
//     }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;