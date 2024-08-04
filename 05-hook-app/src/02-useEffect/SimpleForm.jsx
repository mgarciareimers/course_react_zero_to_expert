import React, { useEffect, useState } from 'react';
import Message from './Message';

const SimpleForm = () => {
    const [ formState, setFormState ] = useState({
        username: 'usuario1',
        email: 'usuario1@email.com'
    });

    const  { username, email } = formState;

    const onInputChanged = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
        // console.log('Use effect');
    }, []);

    useEffect(() => {
        // console.log('Use effect form state');
    }, [ formState ]);

    useEffect(() => {
        // console.log('Use effect email state');
    }, [ email ]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                type='text'
                className='form-control'
                placeholder='Username'
                name='username'
                value={ username }
                onChange={ onInputChanged }
            />

            <input
                type='email'
                className='form-control mt-2'
                placeholder='johndoe@email.com'
                name='email'
                value={ email }
                onChange={ onInputChanged }
            />

            {
                (username.includes('usuario2')) && <Message />
            }
        </>
    );
}

export default SimpleForm;