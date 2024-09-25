import { doc, setDoc } from 'firebase/firestore/lite';
import { setSaving, updateNote } from '../journalSlice';
import { firebaseDB } from '../../../firebase/config';

export default function execSaveNote(note) {
    return async(dispatch, getState) => {
        // Check if a note is being saved.
        const { isSaving } = getState().journal;

        if (isSaving) {
            return;
        }

        dispatch(setSaving({ isSaving: true }));
        
        // Create note.
        const { uid } = getState().auth;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;
        
        // Save note into Firebase.
        const documentRef = doc(firebaseDB, `${ uid }/journal/notes/${ note.id }`);
        const response = await setDoc(documentRef, noteToFireStore, { merge: true });

        dispatch(updateNote({ note: note }));
        dispatch(setSaving({ isSaving: false }));
    };
}