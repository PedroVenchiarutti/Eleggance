import { useContext } from 'react';
import { RatingContext } from '../../../contexts/rating';

import Table from '../../Table/Table';
import TrashButton from '../common/TrashButton';
import Ratings from '../../Ratings'

import { useFetch } from '../../../hooks/useFetch';

export default () => <Table headerColumnsArray={[]} bodyObjectsArray={getRows()} />

const getRows = () => {
    const { ratings, deleteRating } = useContext(RatingContext);

    return ratings.map(rating => {
        const { data } = useFetch(`api/public/products/${rating.product_id}`);
        const product = data[0] ?? {};

        return {
            key: rating.id,
            image: <td><img src={product.url_img} alt="Imagem do produto" /></td>,
            productName: <td>{product.name}</td>,
            rating: getProductRating(rating.stars, product.id),
            button: <td><TrashButton onClick={() => deleteRating(rating.id)} /></td>
        }
    })
}

const getProductRating = (ratingStars, productId) => <td className='responsive-hide'><Ratings selectedStar={ratingStars} productId={productId} /></td>