import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
    },
    reducers: {
        addNewEmptyNote: (state, action) => {
            state.isSaving = false;
            state.notes.push(action.payload.note);
        },
        setActiveNote: (state, action) => {
            state.active = action.payload.note;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload.notes;
        },
        setSaving: (state, action) => {
            state.isSaving = action.payload.isSaving;

            if (state.isSaving) {
                state.messageSaved = '';
            }
        },
        setPhotosToActive: (state, action) => {
            state.active.imageUrls = [ ...action.payload.imageUrls, ...state.active.imageUrls ];
        },
        updateNote: (state, action) => {
            const updatedNote = action.payload.note;

            state.notes = state.notes.map((note) => {
                if (note.id === updatedNote.id) {
                    return updatedNote;
                }

                return note;
            });

            state.messageSaved = `"${ updatedNote.title }", updated successfully.`;
        },
        deleteNoteById: (state, action) => {
            
        },
        logout: (state) => {
            return {
                isSaving: false,
                messageSaved: '',
                notes: [],
                active: null
            };
        }
    }
});

// Action creators are generated for each case reducer function.
export const { 
    addNewEmptyNote, 
    setActiveNote, 
    setNotes, 
    setPhotosToActive,
    setSaving, 
    updateNote, 
    deleteNoteById, 
    logout,
} = journalSlice.actions;