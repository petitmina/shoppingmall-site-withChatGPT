import React, { useState } from 'react';
import Modal from 'react-modal'; // 모달 라이브러리 사용
import ShoppingCart from './ShoppingCart';
import LoginModal from './LoginModal'; // LoginModal 컴포넌트 가져오기
// import './App.css';

Modal.setAppElement('#root'); // 모달 라이브러리 설정

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUsername(user);
    setModalIsOpen(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="App">
      {loggedIn ? (
        <div>
          <h1>Hello, {username}!</h1>
          <button onClick={handleLogout}>Logout</button>
          
        </div>
      ) : (
        <div>
          <button onClick={() => setModalIsOpen(true)}>Login</button>
        </div>
      )}
      <LoginModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        onLogin={handleLogin}
      />
      <ShoppingCart />
    </div>
  );
}

export default App;
