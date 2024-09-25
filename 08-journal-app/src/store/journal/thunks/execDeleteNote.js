import { deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { deleteNoteById, setSaving, updateNote } from '../journalSlice';
import { firebaseDB } from '../../../firebase/config';

export default function execDeleteNote(note) {
    return async(dispatch, getState) => {
        // Check if a note is being saved.
        const { isSaving } = getState().journal;

        if (isSaving) {
            return;
        }

        dispatch(setSaving({ isSaving: true }));
        
        // Delete note.
        const { uid } = getState().auth;
        
        const documentRef = doc(firebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await deleteDoc(documentRef);

        dispatch(deleteNoteById({ id: note.id }));
        dispatch(setSaving({ isSaving: false }));
    };
}