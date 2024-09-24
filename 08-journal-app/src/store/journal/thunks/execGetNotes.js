import getNotes from "../../../helpers/getNotes";
import { setNotes } from "../journalSlice";

export default function execGetNotes() {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;

        const response = await getNotes(uid);
        
        dispatch(setNotes({ notes: response.notes }));

    };
}