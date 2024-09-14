import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider();

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