import React, { useState } from "react";
import Footer from "../Footer/Footer";
import AsideFinishBuy from "../../components/AsideFinishBuy/AsideFinishBuy";
import ProductsList from "../../components/ProductsLIst";
import "./FinishBuy.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from '../../contexts/cart';
import CouponForm from '../../components/FinishBuy/CouponForm';
import Api from "../../api/api";

// let inputCupom = document.querySelector("#fieldCoupon");
// inputCupom.addEventListener("change", (e) => {
//   console.log(e);
// });

export default function FinishBuy() {
  const { cart } = useContext(CartContext);

  const sum = (t, v) => t + v;
  const getPriceString = price => 'R$' + price.toFixed(2).replace('.', ',');

  const [paymentMethod, setPaymentMethod] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);

  const subTotalPrice = cart.map(product => (product.qt || 0) * (product.value || 0)).reduce(sum);
  const infos = {
    totalItems: cart.map(product => product.qt || 0).reduce(sum),
    subTotalPrice,
    shippingPrice: 19.99,
    paymentMethod,
    discount: {
      ...(paymentMethod) && {
        byPaymentMethod: paymentMethod === "PIX" ? subTotalPrice * 0.10 : subTotalPrice * 0.05
      },
      ...(couponDiscount) && {
        byCoupon: couponDiscount
      }
    }
  }

  const handleCouponFormSubmit = (event, couponCode) => {
    event.preventDefault();

    Api.get(`http://localhost:3333/api/public/discount/${couponCode}`)
      .then(resp => setCouponDiscount(resp.data[0].discount)).catch(setCouponDiscount(0));
  }

  const getTotalPrice = () =>
    getPriceString(infos.subTotalPrice + infos.shippingPrice - ((infos.discount.byPaymentMethod || 0) + (infos.discount.byCoupon || 0)));

  return (
    <div className="finishBuyContainer">
      <header>
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" />
          </Link>
        </div>
        <h1 className="finishBuy-h1">Finalizar Compra</h1>
      </header>
      <main>
        <div className="col">
          <AsideFinishBuy title="1 - ENDEREÇO">
            <div>
              <li>R JONAS VIDAL DOS SANTOS, 170</li>
              <li>14</li>
              <li>QUIETUDE</li>
              <li>11718-350 || PRAIA GRANDE - SP</li>
            </div>
            <div className="icon-edit">
              <button className="edit-finish">
                <Link to="/perfil/enderecos">
                  <img src="./icons/icon-edit.svg" />
                </Link>
              </button>
            </div>
          </AsideFinishBuy>
          <AsideFinishBuy title="2 - FRETE">
            <li>
              Sedex - prazo dias uteis -  {getPriceString(infos.shippingPrice)}
            </li>
          </AsideFinishBuy>
          <AsideFinishBuy title="3 - CUPOM">
            <CouponForm handleSubmit={handleCouponFormSubmit} />
          </AsideFinishBuy>
        </div>
        <div className="col">
          <AsideFinishBuy title="4 - MÉTODO DE PAGAMENTO" class="paymentMethod">
            <div className="payment-methods">
              <li onClick={() => setPaymentMethod('PIX')}>
                <img className="iconPaymentMethod" src="./icons/icon-pix.svg" />
                PIX
              </li>
              <li onClick={() => setPaymentMethod('BOLETO')}>
                <img
                  className="iconPaymentMethod"
                  src="./icons/icon-boleto.png"
                />
                BOLETO
              </li>
              <li onClick={() => setPaymentMethod("CRÉDITO")}>
                <img
                  className="iconPaymentMethod"
                  src="./icons/icone-credit-card.png"
                />
                CARTÃO DE CRÉDITO
              </li>
            </div>
          </AsideFinishBuy>
        </div>
        <div className="col">
          <AsideFinishBuy title="5 - INFORMAÇÕES DO PEDIDO" class="itemsCart">
            <ProductsList products={cart} />
            <div className="info-cart">
              <table>
                <tbody>
                  <tr>
                    <td>Subtotal ({infos.totalItems})</td>
                    <td> {getPriceString(infos.subTotalPrice)}</td>
                  </tr>
                  <hr />
                  <tr>
                    <td>Entrega</td>
                    <td> {getPriceString(infos.shippingPrice)}</td>
                  </tr>
                  <hr />
                  {
                    infos.paymentMethod ?
                      <>
                        <tr>
                          <td>Desconto do {infos.paymentMethod}</td>
                          <td> {getPriceString(infos.discount.byPaymentMethod)}</td>
                        </tr>
                        <hr />
                      </> : ''
                  }
                  {
                    infos.discount.byCoupon ?
                      <>
                        <tr>
                          <td>Desconto do cupom</td>
                          <td>{getPriceString(infos.discount.byCoupon)}</td>
                        </tr>
                        <hr />
                      </> : ''
                  }
                  <tr>
                    <td>Total</td>
                    <td> {getTotalPrice()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button>Finalizar Compra</button>
          </AsideFinishBuy>
        </div>
      </main>
      <Footer />
    </div>
  );
}