import React, { useState } from 'react';

function Register({ setView }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const newUser = { username, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    alert('Registration successful! Please log in.');
    setView('login');
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="register-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="register-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="register-input"
        />
        <button type="submit" className="register-button">Register</button>
        <p>
          Already have an account?{' '}
          <span onClick={() => setView('login')} className="link">Log in</span>
        </p>
      </form>
    </div>
  );
}

export default Register;
