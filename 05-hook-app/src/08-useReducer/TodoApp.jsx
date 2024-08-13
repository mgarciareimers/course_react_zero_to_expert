import TodoList from './TodoList';
import { TodoAdd } from './TodoAdd';
import useTodos from '../hooks/useTodos';

const TodoApp = () => {
    const { todos, todosCount, pendingTodosCount, addNewTask, deleteTask, toggleTask } = useTodos();

    return (
        <>
            <h1>Todo App ({ todosCount }), <small>Pending: { pendingTodosCount }</small></h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        todoList={ todos } 
                        deleteTask={ deleteTask }
                        toggleTask={ toggleTask }
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
