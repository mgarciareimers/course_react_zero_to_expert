import React, { useEffect, useReducer } from 'react';
import todoReducer from './todo-reducer';
import TodoList from './TodoList';
import { TodoAdd } from './TodoAdd';

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [ todos ])
    

    const addNewTask = (newTask) => {
        dispatch({
            type: 'add',
            payload: newTask
        });
    }

    const deleteTask = (task) => {
        dispatch({
            type: 'delete',
            payload: task
        });
    }

    return (
        <>
            <h1>Todo App ({ todos.length }), <small>Pending: 2</small></h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        todoList={ todos } 
                        deleteTask={ deleteTask }
                    />
                </div>

                <div className='col-5'>
                    <h4>Add TODO task</h4>
                    <hr />
                
                    <TodoAdd 
                        addNewTask={ addNewTask }
                    />
                </div>
            </div>
        </>
    );
}

export default TodoApp;
