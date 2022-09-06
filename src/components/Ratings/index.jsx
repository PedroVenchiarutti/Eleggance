import React, { useContext } from 'react';
import { RatingContext } from '../../contexts/rating';

import { Rating } from 'react-simple-star-rating'

import './index.scss'

export default ({ productId, selectedStar}) => {
    const { getSelectedRating, selectedRating, saveRating } = useContext(RatingContext);
    getSelectedRating(productId);
    const handleChange = rate => saveRating(rate, productId)
    
    const stars = selectedStar ? selectedStar * 20 : selectedRating.stars * 20;
    return (
        <div className="rating-container">
            <Rating onClick={handleChange} initialValue={stars} ratingValue={stars} />
        </div>
    )
}