import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { RatingContext } from '../../contexts/rating';

import { Rating } from 'react-simple-star-rating'

import './index.scss'
import { useEffect } from 'react';

export default ({ productId, selectedStar, label }) => {
    const { authenticated } = useContext(AuthContext);
    const { selectedRating, saveRating } = useContext(RatingContext);

    const [stars, setStars] = useState((selectedStar ? selectedStar : selectedRating.stars) * 20);
    const [errorMessage, setErrorMessage] = useState("");
    
    useEffect(() => {
        if (!selectedStar) setStars(selectedRating.stars * 20);
    }, [selectedRating])
    
    const handleChange = rate => {
        if (authenticated) saveRating(rate, productId);
        else {
            setStars(rate);
            setErrorMessage("Você precisa entrar em sua conta para salvar essa avaliação");
        }
    }

    return (
        <div className="rating-container">
            <div className='main-div'>
                <Rating onClick={handleChange} initialValue={stars} ratingValue={stars} />
                <h3>{label}</h3>
            </div>
            <div className="message-div">{errorMessage}</div>
        </div>
    )
}