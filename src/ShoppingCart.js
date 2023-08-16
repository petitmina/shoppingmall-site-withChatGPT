import React, { useState } from "react";
import styles from "./ShoppingCart.module.css";

// 간단한 가상의 상품 데이터
const products = [
  { id: 1, name: "Product 1", price: 10.99 },
  { id: 2, name: "Product 2", price: 15.99 },
  // ...더 많은 상품 데이터
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

const removeFromCart = (index) => {
  const updatedCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const removeAllFromCart = () => {
    setCartItems([]);
  };

const calculateTotal = () => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  return total.toFixed(2); // 소수점 2자리까지 표시
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className={styles["product-list"]}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className={styles.cart}>
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
        {cartItems.length > 0 && (
          <div>
            <p>Total: ${calculateTotal()}</p>
            <button onClick={removeAllFromCart}>Clear Cart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
