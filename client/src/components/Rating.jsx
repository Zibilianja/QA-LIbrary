import React, { useEffect } from 'react';
import { useState } from 'react';
import '../styles/rating.scss';
import { FaStar } from 'react-icons/fa';

const Rating = (props) => {
  const [rating, setRating] = useState({ ...props.rating });

  useEffect(() => {
    setRating(props.currentRating());
  }, [props.currentRating()]);

  return (
    <div className="form__rating">
      {[...Array(5)].map((star, i) => {
        let ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              className="rating__radio"
              value={ratingValue}
              display="hidden"
              onClick={() => {
                props.changeRating(ratingValue);
                setRating(ratingValue);
              }}
            />
            <FaStar
              className="fa fa-star star__rating"
              color={
                ratingValue <= (rating || props.currentRating())
                  ? 'gold'
                  : 'grey'
              }
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
