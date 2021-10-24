import React from 'react';

export const TodoListItem = ({ todo, index, handleDeleteTodo, handleToggleTodo }) => {

  return (
    <li key={todo.id} className='list-group-item'>
      <p onClick={() => handleToggleTodo(todo.id)} className={todo.done ? 'complete' : ''}>
        {index + 1}. {todo.desc}
      </p>
      <button
        className='btn btn-danger'
        onClick={() => handleDeleteTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
