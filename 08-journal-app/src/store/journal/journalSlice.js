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
        },
        setNotes: (state, action) => {
            state.notes = action.payload.notes;
        },
        setSaving: (state, action) => {
            state.isSaving = action.payload.isSaving;
        },
        updateNote: (state, action) => {
            
        },
        deleteNoteById: (state, action) => {
            
        },
    }
});

// Action creators are generated for each case reducer function.
export const { 
    addNewEmptyNote, 
    setActiveNote, 
    setNotes, 
    setSaving, 
    updateNote, 
    deleteNoteById, 
} = journalSlice.actions;