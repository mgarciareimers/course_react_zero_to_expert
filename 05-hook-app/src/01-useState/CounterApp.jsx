import { useState } from 'react';

const CounterApp = () => {
    const [ state, setState ] = useState({
        counter: 0,
        counterAdd: 0,
        counterSubtract: 0,
        counterTotal: 0,
    });

    const { counter, counterAdd, counterSubtract, counterTotal } = state;

    const add = () => {
        setState({
            ...state,
            counter: counter + 1,
            counterAdd: counterAdd + 1,
            counterTotal: counterTotal + 1
        });
    }

    const subtract = () => {
        setState({
            ...state,
            counter: counter - 1,
            counterSubtract: counterSubtract + 1,
            counterTotal: counterTotal + 1
        });
    }
    
    return (
        <>
            <h1>Counter: { counter }</h1>
            <h1>Counter add: { counterAdd }</h1>
            <h1>Counter subtract: { counterSubtract }</h1>
            <h1>Counter total: { counterTotal }</h1>
            <hr/>

            <button className='btn btn-primary' onClick={ add }>+1</button>
            <button className='btn btn-danger' onClick={ subtract }>-1</button>
        </>
    );
}

export default CounterApp;