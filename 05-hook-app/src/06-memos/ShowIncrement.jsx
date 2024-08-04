import React from 'react';

const ShowIncrement = React.memo(({ increment, number = 1 }) => {
    console.log('HI');
    return (
        <button 
            className='btn btn-primary'
            onClick={ () => increment(number) }
        >Add 1</button>
    );
})

export default ShowIncrement;