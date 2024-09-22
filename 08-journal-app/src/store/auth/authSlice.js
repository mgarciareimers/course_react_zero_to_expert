import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'not-authenticated', 'authenticated', 'checking'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, { payload }) => {
            return {
                status: 'authenticated',
                uid: payload.uid,
                email: payload.email,
                displayName: payload.displayName,
                photoURL: payload.photoURL,
                errorMessage: null
            };
        },
        logout: (state, { payload }) => {
            return {
                status: 'not-authenticated',
                uid: null,
                email: null,
                displayName: null,
                photoURL: null,
                errorMessage: payload?.errorMessage
            };
        },
        checkingCredentials: (state) => {
            return {
                status: 'checking',
                uid: null,
                email: null,
                displayName: null,
                photoURL: null,
                errorMessage: null
            };
        },
    }
});

// Action creators are generated for each case reducer function
export const { 
    login,
    logout,
    checkingCredentials,
} = authSlice.actions;
