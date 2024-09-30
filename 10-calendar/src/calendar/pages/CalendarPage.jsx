import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';

import { CalendarEvent, CalendarModal, Navbar } from '../components';
import { localizer, getCalendarTexts } from '../../helpers';
import { useState } from 'react';

const events = [
    {
        title: 'Boss\'s Birthday',
        notes: 'Buy cake',
        start: new Date(),
        end: addHours(new Date(), 2),
        bgColor: '#fafafa',
        user: {
            _id: '123',
            name: 'Juan'
        }
    },
];

const language = 'en-US';

export const CalendarPage = () => {

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
        console.log({ doubleClick: event });
    }

    const onClick = (event) => {
        console.log({ click: event });
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
        </>
    );
}

export default CalendarPage;