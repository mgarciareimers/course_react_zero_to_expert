const CalendarEvent = ({ event }) => {
    const { title, user } = event;
console.log(user);
    return (
        <>
            <strong>{ title }</strong>
            <br></br>
            <span>{ user.name }</span>
        </>
    );
}

export default CalendarEvent;
