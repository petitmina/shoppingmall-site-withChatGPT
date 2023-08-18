import React, { useState } from 'react';
// import styles from './Product.module.css'; // Product 컴포넌트의 스타일

const Product = ({ product, setProducts }) => {
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = () => {
    if (reviewText) {
      const newReview = {
        text: reviewText,
      };

      const updatedReviews = [...reviews, newReview];
      setReviews(updatedReviews);
      setReviewText('');
    }
  };

  return (
    <div >
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => setProducts([...product, product])}>Add to Cart</button>
      {/* <button onClick={() => onAddToWishlist(product)}>Add to Wishlist</button> */}
      
      <div >
        <h4>Reviews</h4>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{review.text}</li>
          ))}
        </ul>
        <div>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write a review..."
          />
          <button onClick={handleReviewSubmit}>Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
