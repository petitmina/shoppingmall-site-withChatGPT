import React from "react";

const Wishlist = ({ wishlistItems, onRemoveFromWishlist, onUpdateWishlistItem, onRemoveAllFromWishlist }) => {
  const calculateTotal = () => {
    const total = wishlistItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return total.toFixed(2);
  };

  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlistItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} (Quantity: {item.quantity})
            <button onClick={() => onUpdateWishlistItem(index, item.quantity + 1)}>
              +
            </button>
            <button onClick={() => onUpdateWishlistItem(index, item.quantity - 1)}>
              -
            </button>
            <button onClick={() => onRemoveFromWishlist(index)}>Remove</button>
          </li>
        ))}
      </ul>
      {wishlistItems.length > 0 && (
        <div>
          <p>Total: ${calculateTotal()}</p>
          <button onClick={() => onRemoveAllFromWishlist()}>Clear Wishlist</button>
        </div>
      )}
    </div>
  );
};

export default Wishlist;