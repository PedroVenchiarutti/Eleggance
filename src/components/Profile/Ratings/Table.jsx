import Table from '../../Table/Table';
import SaleTag from '../common/SaleTag';
import Ratings from '../../Ratings'

import { myRatings } from '../../../api/mock';

import './Table.scss'

export default () =>
    <Table headerColumnsArray={[]} bodyObjectsArray={getRows()} />

const getRows = () =>
    myRatings.map(rating => {
        return {
            image: <td><img src={rating.img} /></td>,
            productInfos: getProductInfos(rating.name, rating.inSale),
            rating: getProductRating(rating.stars),
            button: <td><button><img src="/icons/trashIcon.svg" alt="Excluir" className="trashIcon" /></button></td>
        }
    });

const getProductInfos = (name, inSale) =>
    <td className='products-cell'>
        <div className='products-info'>
            {name}
            {inSale ? <SaleTag /> : ''}
        </div>
    </td>

const getProductRating = (ratingStars) => <td className='responsive-hide'><Ratings selectedStar={ratingStars} /></td>