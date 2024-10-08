import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks';

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Hi', i);
    }

    return `Number of iteration: ${ iterationNumber }`;
}

const MemoHook = () => {
    const { counter, add, subtract } = useCounter();
    const [ show, setShow ] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [ counter ]);

    return (
        <>
            <h1>Counter: <small>{ counter }</small></h1>
            <hr />

            <h4>{ memorizedValue }</h4>

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

export default MemoHook;
