import React, { useEffect } from 'react';

const Message = () => {
    useEffect(() => {
        console.log('Message mounted!');

        return () => {
            console.log('Message unmounted!');
        };
    }, []);

    return (
        <i>Usuario ya existe</i>
    );
}

export default Message;