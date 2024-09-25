import { collection, getDocs } from 'firebase/firestore/lite';
import { firebaseDB } from '../firebase/config';

const getNotes = async (uid = '') => {
    const collectionRef = collection(firebaseDB, `${ uid }/journal/notes`);
    const docs = await getDocs(collectionRef);
    
    const notes = [];

    docs.forEach((doc) => {
        const data = doc.data();

        if (data.imageUrls === undefined || data.imageUrls === null) {
            data.imageUrls = [];
        }

        notes.push({ 
            id: doc.id, 
            ...data
        });
    })
    
    return {
        notes: notes
    };
}

export default getNotes;