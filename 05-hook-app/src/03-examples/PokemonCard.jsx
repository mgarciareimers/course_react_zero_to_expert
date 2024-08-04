import React, { useLayoutEffect, useRef, useState } from 'react';

export default ({ id, name, sprites = [] }) => {
    const spritesRef = useRef();
    const [ boxSize, setBoxSize ] = useState({
        width: 0,
        height: 0,
    }); 

    useLayoutEffect(() => {
        const { width, height } = spritesRef.current.getBoundingClientRect();
        setBoxSize({ width, height });
    }, [ id ])

    return (
        <section
            style={{ height: 200 }}
            className='alert p-0 m-0 align-items-center'
        >
            <h2 className='text-capitalize'>#{ id } - { name }</h2>

            <div ref={ spritesRef }>
                {
                    sprites.map((sprite) => (
                        <img key={ sprite } src={ sprite } alt={ name } />
                    ))
                }
            </div>

            <code>{ JSON.stringify(boxSize) }</code>
        </section>
    );
}
