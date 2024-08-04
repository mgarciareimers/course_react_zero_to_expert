import React from 'react';

export default ({ id, name, sprites = [] }) => {
    return (
        <section
            style={{ height: 200 }}
            className='alert p-0 m-0 align-items-center'
        >
            <h2 className='text-capitalize'>#{ id } - { name }</h2>

            <div>
                {
                    sprites.map((sprite) => (
                        <img key={ sprite } src={ sprite } alt={ name } />
                    ))
                }
            </div>
        </section>
    );
}
