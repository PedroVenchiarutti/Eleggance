import { useContext } from 'react';
import { RatingContext } from '../../../contexts/rating';

import Table from '../../Table/Table';
import Loading from '../../SpinerLoader';
import NoResults from '../../NoResults';

import SaleTag from '../common/SaleTag';
import TrashButton from '../common/TrashButton';
import Ratings from '../../Ratings'

import { useFetch } from '../../../hooks/useFetch';

import './Table.scss'
import Image from '../common/Image';

export default () => {
    const { ratings, loading } = useContext(RatingContext);
    
    if (loading) return <div className="loading"><Loading /></div>;
    return ratings.length ?
        <Table headerColumnsArray={[]} bodyObjectsArray={getRows(ratings)} /> : <NoResults message="Você não possui avaliações cadastradas." />
}

const getRows = (ratings) => {
    const { deleteRating } = useContext(RatingContext);

    return ratings.map(rating => {
        const { data } = useFetch(`api/public/products/${rating.product_id}`);
        const product = data ?? {};
        
        return {
            key: rating.id,
            image: <td><Image urlImage={product.url_img} /></td>,
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