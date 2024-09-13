import React, { useState } from 'react';
import { useGetTodosQuery, useGetTodoQuery } from './store/apis';

const TodoApp = () => {

    const [ todoId, setTodoId ] = useState(1)

    //const { data: list, error, isLoading }  = useGetTodosQuery();
    const { data: todo, error, isLoading }  = useGetTodoQuery(todoId);

    const onNextTodoButtonClicked = () => {
        setTodoId(todoId + 1);
    }

    const onPreviousTodoButtonClicked = () => {
        if (todoId <= 1) {
            return;
        }

        setTodoId(todoId - 1);
    }

    return (
        <>
            <h1>Todos RTK Query</h1>
            <hr/>

            <h4>isLoading: { isLoading ? 'True' : 'False' }</h4>

            <pre>{ JSON.stringify(todo) }</pre>

            <button onClick={ onPreviousTodoButtonClicked }>
                Previous
            </button>

            <button onClick={ onNextTodoButtonClicked }>
                Next
            </button>

            {/*
                <ul>
                    {
                        list.map((item) => {
                            return (
                                <li><b>{ item.completed ? 'Done' : 'Pending' }</b> ${ item.title }</li>
                            );
                        })
                    }
                </ul>
            */}
        </>
    );
}

export default TodoApp;