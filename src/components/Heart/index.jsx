import { useEffect } from 'react';
import { useState, useContext } from 'react';
import { FavoritesContext } from '../../contexts/favorites';

import './index.scss';
export default ({ productId }) => {
    const { selectedFavorite, saveFavorite, deleteFavorite } = useContext(FavoritesContext);

    const [checkedInput, setChecketInput] = useState(selectedFavorite.product_id == productId);
    useEffect(() => {
        setChecketInput(selectedFavorite.product_id == productId);
    }, [selectedFavorite])

    const updateFavorite = () => {
        try {
            if (selectedFavorite.product_id == productId) deleteFavorite(selectedFavorite.id);
            else saveFavorite(productId);
            setChecketInput(!checkedInput);
        } catch (error) { }
    }

    return (
        <div className="heart-products">
            <div className="heart-product">
                <input onClick={() => updateFavorite()} onChange={() => { }} type="radio" id="heart1" name="rate" value="1" checked={checkedInput} />
                <label htmlFor="heart1" title="text">
                    1 heart
                </label>
            </div>
        </div>
    )
}