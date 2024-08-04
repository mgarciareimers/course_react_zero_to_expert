import React from 'react';

const Small = React.memo(({ value }) => {
    console.log('RELOAD');
    return (
        <small>{ value }</small>
    );
})

export default Small;