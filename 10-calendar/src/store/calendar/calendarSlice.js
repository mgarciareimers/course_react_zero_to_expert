import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: 'Boss\'s Birthday',
    notes: 'Buy cake',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Juan'
    }
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent
        ],
        activeEvent: null,
    },
    reducers: {
        onSetActiveEvent: (state, action) => {
            state.activeEvent = action.payload.event;
        },
        onResetActiveEvent: (state) => {
            state.activeEvent = {
                title: '',
                notes: '',
                start: new Date(),
                end: addHours(new Date(), 1),
                bgColor: '#fafafa',
                user: {
                    _id: '123',
                    name: 'Juan'
                }
            }
        },
        onAddNewEvent: (state, action) => {
            console.log(action.payload);
            state.events.push(action.payload.event);
            state.activeEvent = null;
        },
        onUpdateEvent: (state, action) => {
            state.events = state.events.map((event) => {
                if (event._id === action.payload.event._id) {
                    return action.payload.event;
                }

                return event;
            });
        }
    }
});

// Action creators are generated for each case reducer function.
export const { 
    onSetActiveEvent,
    onResetActiveEvent,
    onAddNewEvent,
    onUpdateEvent,
} = calendarSlice.actions;