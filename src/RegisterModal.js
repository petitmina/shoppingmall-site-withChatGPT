import React, { useState } from 'react';
import Modal from 'react-modal'; // 모달 라이브러리 사용

const RegisterModal = (props) => {
  const [formData, setFormData] = useState({
    username:'',
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // 입력된 회원 정보를 로컬 스토리지에 저장
    localStorage.setItem('userData', JSON.stringify(formData));
    console.log('회원 가입 정보가 저장되었습니다.');
    props.onSignUp();
  };
  

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      contentLabel="회원 가입"
    >
      <div className="App">
      <h1>회원가입 페이지</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="사용자 이름"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
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
        <button type="submit">가입하기</button>
        <button type="button" onClick={props.onRequestClose}>
            닫기
          </button>
      </form>
    </div>
    </Modal>
  );
};

export default RegisterModal;