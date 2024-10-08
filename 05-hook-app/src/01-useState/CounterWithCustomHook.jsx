import useCounter from '../hooks/useCounter';

const CounterWithCustomHook = () => {
    const { counter, add, subtract, reset } = useCounter(10);

    return (
        <>
            <h1>Counter with custom Hook: { counter }</h1>
            <hr/>

            <button className='btn btn-primary' onClick={ () => add }>+1</button>
            <button className='btn btn-secondary' onClick={ () => reset }>Reset</button>
            <button className='btn btn-danger' onClick={ () => subtract }>-1</button>
        </>
    );
}

export default CounterWithCustomHook;