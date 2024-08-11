import React from 'react';

import useForm from '../hooks/useForm';

export const TodoAdd = ({ addNewTask }) => {
    const { description, resetForm, onInputChanged } = useForm({
        description: ''
    });

    const onFormSubmitted = (event) => {
        event.preventDefault();

        if (description.length <= 0) {
            return;
        }

        const newTask = {
            id: new Date().getTime(),
            description: description,
            done: false
        };

        addNewTask(newTask);
        resetForm();
    }

    return (
        <>
            <form onSubmit={ onFormSubmitted }>
                <input 
                    type='text'
                    placeholder='Type task to do'
                    className='form-control'
                    name='description'
                    value={ description }
                    onChange={ onInputChanged }
                /> 

                <button
                    type='submit'
                    className='btn btn-outline-primary mt-2'
                >
                    Add
                </button>
            </form>
        </>
    );
}
