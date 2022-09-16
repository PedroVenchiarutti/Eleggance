import { useContext } from "react";
import { CouponContext } from "../../../contexts/coupon";

import Table from "../../Table/Table";
import NoResults from "../../NoResults";

export default () => {
  const { coupons } = useContext(CouponContext);

  return coupons.length ?
    <Table headerColumnsArray={getHeadRow()} bodyObjectsArray={getRows(coupons)} />
      : <NoResults message="Não existe cupons de desconto cadastrados." shouldShowBottomMessage={false} />; 
};

const getHeadRow = () => [
  "Código",
  "Valor desconto",
  <th className="responsive-hide">Data de início</th>,
  <th className="responsive-hide">Data de expiração</th>,
];

const getRows = (couponsList) =>
  couponsList.map((coupon) => {
    return {
      key: coupon.id,
      code: coupon.code,
      discount: coupon.discount + "%",
      created_at: (
        <td className="responsive-hide">{new Date().toLocaleDateString()}</td>
      ),
      dt_limit: (
        <td className="responsive-hide">
          {new Date(coupon.dt_limit).toLocaleDateString()}
        </td>
      ),
    };
  });
