import React, { useState } from 'react'
import { useCounter } from '../hooks';
import Small from './Small';

const Memorize = () => {
    const { counter, add, subtract } = useCounter();

    const [ show, setShow ] = useState(true);

    return (
        <>
            <h1>Counter: <Small value={ counter } /></h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={ (event) => add() }
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary'
                onClick={ (event) => setShow(!show) }
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        
        </>
    );
}

export default Memorize;
