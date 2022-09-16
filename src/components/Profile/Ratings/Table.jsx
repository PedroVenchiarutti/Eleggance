import { useContext } from 'react';
import { RatingContext } from '../../../contexts/rating';

import Table from '../../Table/Table';
import SaleTag from '../common/SaleTag';
import TrashButton from '../common/TrashButton';
import Ratings from '../../Ratings'

import { useFetch } from '../../../hooks/useFetch';

import './Table.scss'

export default () => <Table headerColumnsArray={[]} bodyObjectsArray={getRows()} />

const getRows = () => {
    const { ratings, deleteRating } = useContext(RatingContext);

    return ratings.map(rating => {
        const { data } = useFetch(`api/public/products/${rating.product_id}`);
        const product = data[0] ?? {};

        return {
            key: rating.id,
            image: <td><img src={product.url_img} alt="Imagem do produto" /></td>,
            mainInfos: getProductInfos(product.name, product.offer),    
            rating: getProductRating(rating.stars, product.id),
            button: <td><TrashButton onClick={() => deleteRating(rating.id)} /></td>
        }
    })
}

const getProductInfos = (name, inOffer) =>
    <td className='product'>
        <p>{name}</p>
        {inOffer ? <SaleTag /> : false}
    </td>

const getProductRating = (ratingStars, productId) => <td className='responsive-hide'><Ratings selectedStar={ratingStars} productId={productId} /></td>