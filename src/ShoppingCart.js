import React, { useState } from "react";
import styles from "./ShoppingCart.module.css";
import Product from "./Product";
import {
  loadCartFromLocalStorage,
  updateCart,
  clearCart,
} from "./cartLocalStorage";

// 간단한 가상의 상품 데이터
const products = [
  { id: 1, name: "Product 1", price: 10.99 },
  { id: 2, name: "Product 2", price: 15.99 },
  // ...더 많은 상품 데이터
];

const ShoppingCart = ({ onAddToWishlist }) => {
  const [cartItems, setCartItems] = useState(loadCartFromLocalStorage());

  const [reviewProducts, setReviewProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      reviews: [],
    },
    {
      id: 2,
      name: "Product 2",
      reviews: [],
    },
  ]);

  const addToCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    let updatedCartItems; 

    if (existingCartItem) {
      updatedCartItems = cartItems.map((item) =>
        item.id === existingCartItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    updateCart(updatedCartItems);
  };

  const updateCartItemQuantity = (index, newQuantity) => {
    if (newQuantity > 0) {
      const updatedCartItems = cartItems.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedCartItems);
    }
  };

  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const removeAllFromCart = () => {
    clearCart();
    setCartItems([]);
  };

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
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
              <Product
                key={product.id}
                product={product}
                setReviewProducts={setReviewProducts}
              />
            
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => onAddToWishlist(product)}>
              Add to Wishlist
            </button>
          </div>
        ))}
        
      </div>
      <div className={styles.cart}>
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price} (Quantity: {item.quantity})
              <button
                onClick={() => updateCartItemQuantity(index, item.quantity + 1)}
              >
                +
              </button>
              <button
                onClick={() => updateCartItemQuantity(index, item.quantity - 1)}
              >
                -
              </button>
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