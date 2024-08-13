
import { useEffect, useReducer } from 'react';
import todoReducer from '../08-useReducer/todo-reducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export default () => {
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    // Called when "todos" parameter changes.
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

    const toggleTask = (id) => {
        dispatch({
            type: 'toggle',
            payload: id
        });
    }

    return {
        todos, 
        todosCount: todos.length,
        pendingTodosCount: todos.filter((task) => !task.done).length,
        addNewTask,
        deleteTask,
        toggleTask,
    }
}