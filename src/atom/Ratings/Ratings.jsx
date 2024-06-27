import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function Ratings({ onRatingChange }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const handleRatingClick = (ratingValue) => {
    setRating(ratingValue);
    onRatingChange(ratingValue); // Pass selected rating to parent component
  };

  return (
    <div className='flex text-center justify-center'>
      {[...Array(3)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRatingClick(ratingValue)}
              style={{ display: 'none' }}
            />
            <FaStar
              size={30}
              color={ratingValue <= (hover || rating) ? "gold" : "gray"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              style={{ cursor: 'pointer', transition: 'color 200ms' }}
            />
          </label>
        );
      })}
    </div>
  );
}
