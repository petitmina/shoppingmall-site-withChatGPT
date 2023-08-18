import React, { useState } from "react";
import Modal from "react-modal"; // 모달 라이브러리 사용
import ShoppingCart from "./ShoppingCart";
import LoginModal from "./LoginModal"; // LoginModal 컴포넌트 가져오기
import Wishlist from "./Wishlist";
// import './App.css';

Modal.setAppElement("#root"); // 모달 라이브러리 설정

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUsername(user);
    setModalIsOpen(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
  };

  const addToWishlist = (product) => {
    const existingWishlistItem = wishlistItems.find((item) => item.id === product.id);

    if (existingWishlistItem) {
      const updatedWishlistItems = wishlistItems.map((item) =>
        item.id === existingWishlistItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setWishlistItems(updatedWishlistItems);
    } else {
      setWishlistItems([...wishlistItems, { ...product, quantity: 1 }]);
    }
  };
  const updateWishlistItemQuantity = (index, newQuantity) => {
    if (newQuantity > 0) {
      const updatedWishlistItems = wishlistItems.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      );
      setWishlistItems(updatedWishlistItems);
    }
  };

  const removeFromWishlist = (index) => {
    const updatedWishlistItems = wishlistItems.filter((item, i) => i !== index);
    setWishlistItems(updatedWishlistItems);
  };

  const removeAllFromWishlist = () => {
    setWishlistItems([]);
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
      <ShoppingCart onAddToWishlist={addToWishlist} />
      <Wishlist
        wishlistItems={wishlistItems}
        onRemoveFromWishlist={removeFromWishlist}
        onUpdateWishlistItem={updateWishlistItemQuantity}
        onRemoveAllFromWishlist={removeAllFromWishlist}
      />
    </div>
  );
}

export default App;
