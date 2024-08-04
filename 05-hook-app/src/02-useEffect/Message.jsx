import React, { useEffect, useState } from 'react';

const Message = () => {
    const [ coordinates, setCoordinates ] = useState({ x: 0, y: 0 });

    const onMouseMove = ({ x, y }) => {
        setCoordinates({ x, y });
    }

    useEffect(() => {
        // Loading: Runs when the component is mounted.
        window.addEventListener('mousemove', onMouseMove);

        // Cleanup: Runs when the component is unmounted.
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
        <>
            <i>Usuario ya existe</i>
            <p>Coordinates: { JSON.stringify(coordinates) }</p>
        </>
    );
}

export default Message;