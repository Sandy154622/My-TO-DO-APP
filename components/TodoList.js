import React, { useState } from 'react';

function TodoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(null);
  const [newText, setNewText] = useState('');

  const handleEdit = (id, currentText) => {
    setIsEditing(id);
    setNewText(currentText);
  };

  const saveEdit = (id) => {
    editTodo(id, newText);
    setIsEditing(null);
    setNewText('');
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'todo completed' : 'todo'}>
          {isEditing === todo.id ? (
            <>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="edit-input"
              />
              <button onClick={() => saveEdit(todo.id)} className="save-button">Save</button>
            </>
          ) : (
            <>
              <div className="todo-content" onClick={() => toggleComplete(todo.id)}>
                <span>{todo.text}</span>
                <div className="date-time">
                  <small>{`Added on ${todo.date} at ${todo.time}`}</small>
                </div>
              </div>
              <div>
                <button onClick={() => handleEdit(todo.id, todo.text)} className="edit-button">Edit</button>
                <button onClick={() => deleteTodo(todo.id)} className="delete-button">Delete</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

