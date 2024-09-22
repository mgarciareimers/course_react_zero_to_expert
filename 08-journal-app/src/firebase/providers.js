import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { firebaseAuth } from './config'
import { AuthCredential } from 'firebase/auth/web-extension';

const googleProvider = new GoogleAuthProvider();

export const signInWithEmailPassword = async ({ email, password }) => {
    try {
        // Sign in.
        const response = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const { displayName, photoURL, uid } = response.user;

        return {
            success: true,
            displayName, email, photoURL, uid
        }
    } catch(e) {
        return {
            success: false,
            errorCode: e.code,
            errorMessage: e.message
        }
    }
}

export const signInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(firebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = response.user;

        return {
            success: true,
            displayName, email, photoURL, uid
        }
    } catch(e) {
        return {
            success: false,
            errorCode: e.code,
            errorMessage: e.message
        }
    }
}

export const signUpWithEmailPassword = async ({ displayName, email, password }) => {
    try {
        // Create account.
        const response = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, photoURL } = response.user;

        // Update name.
        await updateProfile(firebaseAuth.currentUser, { displayName: displayName });

        return {
            success: true,
            displayName, email, photoURL, uid
        }
    } catch(e) {
        return {
            success: false,
            errorCode: e.code,
            errorMessage: e.message
        }
    }
}

export const logoutWithGoogle = async () => {
    try {
        const response = await firebaseAuth.signOut();

        return {
            success: true,
            errorMessage: null
        };
    } catch(e) {
        return {
            success: false,
            errorCode: e.code,
            errorMessage: e.message
        }
    }
} 