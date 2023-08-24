import React, { useState } from 'react';
// import styles from './Product.module.css'; // Product 컴포넌트의 스타일

const Product = ({ product, setProducts }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = () => {
    if (reviewText && rating > 0) {
      const newReview = {
        text: reviewText,
        rating,
      };

      const updatedReviews = [...reviews, newReview];
      setReviews(updatedReviews);
      setReviewText('');
      setRating(0);
    }
  };

  return (
    <div >
      {/* <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => setProducts([...product, product])}>Add to Cart</button> */}
      {/* <button onClick={() => onAddToWishlist(product)}>Add to Wishlist</button> */}
      
      <div >
        <h4>Reviews</h4>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{review.text} (Rating: {review.rating})</li>
          ))}
        </ul>
        <div>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write a review..."
          />
          <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
            <option value={0}>Select Rating</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button onClick={handleReviewSubmit}>Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default Product;