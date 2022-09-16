import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { FavoritesContext } from '../../../contexts/favorites';
import Table from '../../Table/Table';
import SaleTag from '../common/SaleTag';
import TrashButton from '../common/TrashButton';

import './Table.scss';

export default () =>
    <div className="table-content">
        <Table headerColumnsArray={[]} bodyObjectsArray={getBodyObjects()} />
    </div>

const getBodyObjects = () => {
    const { favorites, deleteFavorite } = useContext(FavoritesContext);

    return favorites.map(favorite => {
        const product = favorite.product;

        const onDeleteClick = () =>
            deleteFavorite(favorite.id).then(() => {
                window.location.reload();
            });

        return {
            image: <td className='responsive-hide'><img src={product.url_img} /></td>,
            infos: getMainInfos(product.name, product.offer),
            deleteBtn: getDeleteButton(onDeleteClick),
            price: <td><p className="product-price responsive-hide">R${product.value}</p></td>,
            buyBtn: getBuyButton(favorite.product_id)
        }
    })
}

const getMainInfos = (name, inOffer) =>
    <td className='product'>
        <p>{name}</p>
        {inOffer ? <SaleTag /> : ''}
    </td>

const getDeleteButton = deleteFavorite => <td><TrashButton onClick={() => deleteFavorite()} /></td>;
const getBuyButton = productId => {
    const navigate = useNavigate();
    return <td><button className='buy-button' onClick={() => navigate(`/detalhes/${productId}`)}>COMPRAR</button></td>
}