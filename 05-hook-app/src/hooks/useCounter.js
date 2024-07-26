import { useState } from 'react';

export default (initialValue = 0) => {
    const [ counter, setCounter ] = useState(initialValue);

    const add = (value = 1) => {
        setCounter(counter + value);
    }

    const subtract = (value = 1) => {
        if (counter <= 0) {
            return;
        }

        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        add,
        subtract,
        reset,
    };
}