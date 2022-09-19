import { useEffect } from 'react';
import { useState, useContext } from 'react';
import { FavoritesContext } from '../../contexts/favorites';

import './index.scss';
export default ({ productId }) => {
    const { selectedFavorite, saveFavorite } = useContext(FavoritesContext);

    const [checkedInput, setChecketInput] = useState(selectedFavorite.product_id == productId);
    useEffect(() => {
        setChecketInput(+selectedFavorite.product_id === +productId);
    }, [selectedFavorite])

    const updateFavorite = () => {
        saveFavorite(productId);
        setChecketInput(!checkedInput);
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