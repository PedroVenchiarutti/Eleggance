import React, { useState, useContext } from 'react';
import { RatingContext } from '../../contexts/rating';

import { Rating } from 'react-simple-star-rating'

import './index.scss'

export default ({ productId, selectedStar }) => {
    const { saveRating } = useContext(RatingContext);
    const [rating, setRating] = useState(selectedStar ? selectedStar * 20 : 0);

    const handleChange = rate => {
        saveRating(rate, productId);
        setRating(rate);
    }

    return (
        <div className="rating-container">
            <Rating onClick={handleChange} initialValue={rating} ratingValue={rating} />
        </div>
    )
}