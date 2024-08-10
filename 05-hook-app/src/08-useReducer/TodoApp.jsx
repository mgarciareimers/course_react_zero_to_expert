import React, { useReducer } from 'react';
import todoReducer from './todo-reducer';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del Alma',
        done: false
    }
];


const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    return (
        <>
            <h1>Todo App</h1>
            <hr />

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </>
    );
}

export default TodoApp;
