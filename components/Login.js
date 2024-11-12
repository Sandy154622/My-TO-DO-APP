import React, { useState } from 'react';

function Login({ setIsAuthenticated, setView }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser && username === storedUser.username && password === storedUser.password) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
        <p>
          Don't have an account?{' '}
          <span onClick={() => setView('register')} className="link">Sign up</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
