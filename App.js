import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [view, setView] = useState('login');

  useEffect(() => {
    const savedAuthStatus = JSON.parse(localStorage.getItem('isAuthenticated'));
    if (savedAuthStatus) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      {isAuthenticated ? (
        <>
          <h1>My To-Do List</h1>
          <button onClick={handleLogout} className="logout-button">Logout</button>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        </>
      ) : view === 'login' ? (
        <Login setIsAuthenticated={setIsAuthenticated} setView={setView} />
      ) : (
        <Register setView={setView} />
      )}
    </div>
  );
}

export default App;
