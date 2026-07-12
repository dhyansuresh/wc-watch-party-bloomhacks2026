import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { signInWithGoogle, signOutUser } from "../firebase/auth";

export const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        user,
        loading,          // true until the initial auth check resolves
        isSignedIn: Boolean(user),
        signIn: signInWithGoogle,
        signOut: signOutUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}