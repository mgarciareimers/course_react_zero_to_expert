import React from 'react';
import { useGetTodosQuery } from './store/apis/todosApi';

const TodoApp = () => {
    const { data: list, error, isLoading }  = useGetTodosQuery();

    return (
        <>
            <h1>Todos RTK Query</h1>
            <hr/>

            <h4>isLoading: { isLoading ? 'True' : 'False' }</h4>

            <pre>...</pre>

            <ul>
                {
                    list.map((item) => {
                        return (
                            <li><b>{ item.completed ? 'Done' : 'Pending' }</b> ${ item.title }</li>
                        );
                    })
                }
            </ul>

            <button>
                Next
            </button>
        </>
    );
}

export default TodoApp;