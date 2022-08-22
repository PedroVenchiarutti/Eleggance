import { myFavorites } from '../../../api/mock';
import Table from '../../Table/Table';
import SaleTag from '../common/SaleTag';

import './Table.scss';

export default () =>
    <div className="favorites-table-container">
        <Table headerColumnsArray={[]} bodyObjectsArray={getBodyObjects()} />
    </div>

const getBodyObjects = () => (
    myFavorites.map(favorite => {
        return {
            image: <td className='responsive-hide'><img src="/img/produtos/gloss.png" /></td>,
            infos: getMainInfos(favorite.name, favorite.inSale),
            deleteBtn: <td><button className='trash-button'><img src="/icons/icon-trash.svg" alt="" /></button></td>,
            price: <td><p className="product-price responsive-hide">R${favorite.price}</p></td>,
            buyBtn: <td><button className='buy-button'>COMPRAR</button></td>
        }
    })
)

const getMainInfos = (name, inSale) => <td className='product'> <p>{name}</p> {inSale ? <SaleTag /> : ''} </td>