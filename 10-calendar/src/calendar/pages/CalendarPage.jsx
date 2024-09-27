import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';

import { CalendarEvent, Navbar } from '../components';
import { localizer, getCalendarTexts } from '../../helpers';

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

    return (
        <>
            <Navbar />

            <Calendar
                culture={ language }
                localizer={ localizer }
                events={ events }
                startAccessor='start'
                endAccessor='end'
                style={{ height: 'calc(100vh - 80px)' }}
                messages={ getCalendarTexts(language) }
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEvent
                }}
            />
        </>
    );
}

export default CalendarPage;