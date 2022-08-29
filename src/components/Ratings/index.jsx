import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import './index.scss'

export default ({ selectedStar }) => {
    const [rating, setRating] = useState(0);

    // API treatment goes here (to save in DB)
    const handleChange = rate => setRating(rate);

    return (
        <div className="rating-container">
            <Rating onClick={handleChange} initialValue={selectedStar ?? rating} ratingValue={rating} />
        </div>
    )
}