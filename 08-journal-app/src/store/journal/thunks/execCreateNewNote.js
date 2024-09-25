import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { firebaseDB } from '../../../firebase/config';
import { addNewEmptyNote, setActiveNote, setSaving } from '../journalSlice';

export default function execCreateNewNote() {
    return async(dispatch, getState) => {
        // Check if a note is being saved.
        const { isSaving } = getState().journal;

        if (isSaving) {
            return;
        }

        dispatch(setSaving({ isSaving: true }));
        
        // Create note.
        const { uid } = getState().auth;

        const note = {
            title: '',
            body: '',
            imageUrls: [],
            date: new Date().getTime()
        }
        
        // Save note into Firebase.
        const newDocument = doc(collection(firebaseDB, `${ uid }/journal/notes`));
        const response = await setDoc(newDocument, note);

        note.id = newDocument.id;

        dispatch(addNewEmptyNote({ note: note }));
        dispatch(setActiveNote({ note: note }));
    };
}