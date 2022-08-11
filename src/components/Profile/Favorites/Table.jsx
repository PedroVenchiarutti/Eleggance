import { myFavorites } from '../../../api/mock';

import './Table.scss';

export default () => (
    <table className='favorites-table'>
        <tbody>
            {renderBodyRows()}
        </tbody>
    </table>
)

const renderBodyRows = () => (
    myFavorites.map(favorite => {
        return (
            <tr>
                <td className='product-img responsive-hide'><img src="/img/produtos/gloss.png" /></td>
                <td className='product'>
                    <p>{favorite.name}</p>
                    {favorite.inSale ? <p className='sale'>Oferta</p> : ''}
                </td>
                <td>
                    <button className='trash-button'>
                        <img src="/icons/icon-trash.svg" alt="" />
                    </button>
                </td>
                <td><p className="product-price responsive-hide">R${favorite.price}</p></td>
                <td><button className='buy-button'>COMPRAR</button></td>
            </tr>
        )
    })
)