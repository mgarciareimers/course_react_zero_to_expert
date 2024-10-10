import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'authenticated', 'not-authenticated', 'checking'
        user: {},
        errorMessage: undefined,
    },
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: (state, action) => {
            state.status = 'authenticated';
            state.user = action.payload.user;
            state.errorMessage = undefined;
        },
        onLogout: (state, action) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = action.payload?.errorMessage;
        },
        onClearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }
    }
});

// Action creators are generated for each case reducer function.
export const {
    onClearErrorMessage,
    onChecking,
    onLogin,
    onLogout,
} = authSlice.actions;