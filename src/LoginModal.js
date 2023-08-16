import React, { useState } from 'react';
import Modal from 'react-modal'; // 모달 라이브러리 사용

const LoginModal = ({ isOpen, onRequestClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      onLogin(username);
      onRequestClose();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={onRequestClose}>Close</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Modal>
  );
};

export default LoginModal;
