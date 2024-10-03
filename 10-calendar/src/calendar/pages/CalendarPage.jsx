import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, Navbar } from '../components';
import { localizer, getCalendarTexts } from '../../helpers';
import { useState } from 'react';
import { useCalendarStore, useUiStore } from '../../hooks';

const language = 'en-US';

export const CalendarPage = () => {
    const { events, hasSelectedEvent, setActiveEvent } = useCalendarStore();

    const { openDateModal } = useUiStore();
    const [ lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'week');

    // Onclick methods.
    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#347cf7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white',
        };

        return {
            style: style
        }
    };

    const onDoubleClick = (event) => {
        openDateModal();
    }

    const onClick = (event) => {
        setActiveEvent(event);
    }

    const onViewChanged = (event) => {
        localStorage.setItem('lastView', event);
        setLastView(event);
    }

    return (
        <>
            <Navbar />

            <Calendar
                culture={ language }
                localizer={ localizer }
                events={ events }
                defaultView={ lastView }
                startAccessor='start'
                endAccessor='end'
                style={{ height: 'calc(100vh - 80px)' }}
                messages={ getCalendarTexts(language) }
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onClick }
                onView={ onViewChanged }
            />

            <CalendarModal />

            { hasSelectedEvent && <FabDelete />}
            <FabAddNew />
        </>
    );
}

export default CalendarPage;