import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ({ value }) => {
    const [ counter, setCounter ] = useState(value);

    // On click.
    const onClickAdd = () => {
        setCounter(counter + 1);
    }

    const onClickSubtract = () => {
        setCounter(counter - 1);
    }

    const onClickReset = () => {
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            
            <button onClick={ onClickAdd }>+1</button>
            <button onClick={ onClickSubtract }>-1</button>
            <button onClick={ onClickReset }>Reset</button>
        </>
    )
}

export default CounterApp;

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0
}
