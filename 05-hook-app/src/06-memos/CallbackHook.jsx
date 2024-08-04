import React, { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {
    const [ counter, setCounter ] = useState(10);
    
    const onAddButtonClicked = useCallback(
      (number) => setCounter((value) => value + number),
      [],
    );

    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement 
                increment={ onAddButtonClicked } 
                number={ 5 }
            />
        </>
    );
}

export default CallbackHook;
