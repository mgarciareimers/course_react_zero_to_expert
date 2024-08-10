import React, { useCallback, useState } from 'react';
import { Son } from './Son';

const Father = () => {

    const numbers = [ 2, 4, 6, 8, 10 ];
    const [ value, setValue ] = useState(0);

    const increment = useCallback(
        (number) => setValue((oldValue) => oldValue + number),
        []
    );

    return (
        <div>
            <h1>Father</h1>
            <p> Total: { value } </p>

            <hr />

            {
                numbers.map( n => (
                    <Son 
                        key={ n }
                        number={ n }
                        increment={ increment }
                    />
                ))
            }
            {/* <Son /> */}
        </div>
    )
}

export default Father;