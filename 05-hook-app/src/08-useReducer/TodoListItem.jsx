import React from 'react'

const TodoListItem = ({ todoItem, deleteTask, toggleTask }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
        <span 
            className={ `align-self-center ${ todoItem.done ? 'text-decoration-line-through' : '' }` }
            onClick={ () => toggleTask(todoItem.id) }
        >
            { todoItem.description }
        </span>
        <button className='btn btn-danger' onClick={ () => deleteTask(todoItem) }>Delete</button>
    </li>
  );
}

export default TodoListItem;
