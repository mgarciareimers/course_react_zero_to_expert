import { fileUpload } from '../../../helpers';
import { setPhotosToActive, setSaving } from '../journalSlice';
import execSaveNote from './execSaveNote';

export default function execFilesUpload(files = []) {
    return async(dispatch, getState) => {
        dispatch(setSaving(true));

        const fileUploadPromises = [];
        
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }

        const responses = await Promise.all(fileUploadPromises);
        const imageUrls = [];

        for (const response of responses) {
            if (response.success) {
                imageUrls.push(response.url);
            }
        }

        dispatch(setPhotosToActive({ imageUrls: imageUrls }));
        dispatch(execSaveNote(getState().journal.active));
    };
}