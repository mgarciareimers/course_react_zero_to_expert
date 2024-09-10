import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 1,
        count: 0,
        list: [],
        isLoading: false
    },
    reducers: {
        startLoadingList: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setList: (state, action ) => {
            state.isLoading = false;
            state.count = action.payload.count;
            state.list = action.payload.list;
            state.page = action.payload.page;
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingList, setList } = pokemonSlice.actions;