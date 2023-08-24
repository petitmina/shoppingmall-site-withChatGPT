import React, { useState } from 'react';
import Modal from 'react-modal'; // 모달 라이브러리 사용

const LoginModal = ({ isOpen, onRequestClose, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleLogin = () => {
    const storedData =JSON.parse(localStorage.getItem('userData'));

    if (storedData) {
      if(formData.email === storedData.email && formData.password === storedData) {
        setMessage('로그인 성공!');
      } else {
        setMessage('로그인 실패. 올바른 이메일과 비밀번호를 입력하세요');
      }
    } else {
      setMessage('등록된 회원정보가 없습니다.');
    }
  }
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  // const handleLogin = () => {
  //   if (username === 'user' && password === 'password') {
  //     onLogin(username);
  //     onRequestClose();
  //   } else {
  //     setError('Invalid username or password');
  //   }
  // };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="Login">
      <h1>로그인 페이지</h1>
      <form>
        <input
          type="email"
          placeholder="이메일"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleLogin}>로그인</button>
      </form>
      <p>{message}</p>
    </div>
      {/* <h2>Login</h2>
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
      {error && <p style={{ color: 'red' }}>{error}</p>} */}
    </Modal>
  );
};

export default LoginModal;