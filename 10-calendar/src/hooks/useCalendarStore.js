import { useDispatch, useSelector } from 'react-redux';
import { onSetActiveEvent, onResetActiveEvent, onAddNewEvent, onUpdateEvent } from '../store/calendar/calendarSlice';

const useCalendarStore = () => {
    const dispatch = useDispatch();

    const { 
        events,
        activeEvent,
    } = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent({ event: calendarEvent }));
    }

    const resetActiveEvent = () => {
        dispatch(onResetActiveEvent());
    }

    const saveEvent = async (calendarEvent) => {
        if (calendarEvent._id === undefined || calendarEvent._id === null) {
            // Create.


            dispatch(onAddNewEvent({ event: { ...calendarEvent, _id: new Date().getTime() }}));
        } else {
            // Update.
            dispatch(onUpdateEvent({ event: { ...calendarEvent }}));
        }
    }

    return {
        // Properties.
        events,
        activeEvent,

        // Methods.
        setActiveEvent,
        resetActiveEvent,
        saveEvent,
    };
}

export default useCalendarStore;