import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, deleteTask }) => {
    return (
        <ul className='list-group'>
            {
                todoList.map((item) => <TodoListItem 
                    key={ item.id }
                    todoItem={ item }
                    deleteTask={ deleteTask }
                />)
            }
        </ul>
    );
}

export default TodoList;