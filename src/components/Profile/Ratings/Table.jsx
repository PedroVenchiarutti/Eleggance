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
    const { ratings, products, deleteRating } = useContext(RatingContext);

    const onDeleteClick = ratingId => deleteRating(ratingId);

    return ratings.length && products.length ? ratings.map((rating, index) => {
        const product = products[index];
        console.log(product);

        return {
            image: <td><img src={product.url_img} /></td>,
            productInfos: getProductInfos(product.name, false),
            rating: getProductRating(rating.stars),
            button: <td><TrashButton onClick={() => onDeleteClick(rating.id)} /></td>
        }
    }) : [];
}

const getProductInfos = (name, inSale) =>
    <td className='products-cell'>
        <div className='products-info'>
            {name}
            {inSale ? <SaleTag /> : ''}
        </div>
    </td>

const getProductRating = (ratingStars) => <td className='responsive-hide'><Ratings selectedStar={ratingStars} /></td>