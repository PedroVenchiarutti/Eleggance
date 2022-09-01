import { useContext } from 'react';
import { RatingContext } from '../../../contexts/rating';

import Table from '../../Table/Table';
import SaleTag from '../common/SaleTag';
import TrashButton from '../common/TrashButton';
import Ratings from '../../Ratings'

import './Table.scss'

export default () =>
    <Table headerColumnsArray={[]} bodyObjectsArray={getRows()} />

const getRows = () => {
    const { getByAuthenticatedUser, deleteRating, getRatingProduct } = useContext(RatingContext);
    
    const ratings = getByAuthenticatedUser();
    ratings.forEach(rating => {
        console.log(getRatingProduct(rating.product_id));
    });

    return [];
}

const getProductInfos = (name, inSale) =>
    <td className='products-cell'>
        <div className='products-info'>
            {name}
            {inSale ? <SaleTag /> : ''}
        </div>
    </td>

const getProductRating = (ratingStars) => <td className='responsive-hide'><Ratings selectedStar={ratingStars} /></td>