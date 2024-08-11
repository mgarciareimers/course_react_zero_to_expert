import React from 'react'

const TodoListItem = ({ todoItem, deleteTask }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
        <span className='align-self-center'>{ todoItem.description }</span>
        <button className='btn btn-danger' onClick={ () => deleteTask(todoItem) }>Delete</button>
    </li>
  );
}

export default TodoListItem;
