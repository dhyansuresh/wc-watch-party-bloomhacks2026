// Firebase Auth helpers (sign in, sign out, current user)

import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./config";

const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
    const result = await signInWithPopup(auth, provider);
    return result.user;
}

export function signOutUser() {
    return signOut(auth);
}