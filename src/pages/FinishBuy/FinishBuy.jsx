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
import PaymentForm from "../../components/FinishBuy/PaymentForm";
import AddressForm from "../../components/FinishBuy/AddressForm/AddressForm";
import Table from "../../components/FinishBuy/Table";

export default function FinishBuy() {
  const { cart, finishBuy } = useContext(CartContext);

  const [selectValue, setSelectValue] = useState('');

  const [paymentMethod, setPaymentMethod] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);
  
  const sum = (accumulated, current) => +accumulated ?? 0 + +current ?? 0;
  
  const subTotalPrice = cart.map(product => product.qt * product.value).reduce(sum, 0);
  const infos = {
    totalItems: cart.map(product => product.qt).reduce(sum, 0),
    subTotalPrice,
    shippingPrice: 19.99,
    paymentMethod,
    discount: {
      ...(paymentMethod) && {
        byPaymentMethod: paymentMethod === "PIX" ? subTotalPrice * 0.10 : paymentMethod === "BOLETO" ? subTotalPrice * 0.08 : subTotalPrice * 0.05
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
            <AddressForm />
          </AsideFinishBuy>
          <AsideFinishBuy title="2 - FRETE">
            <li>
              Sedex - prazo dias uteis - R$ {infos.shippingPrice.toFixed(2).replace('.', ',')}
            </li>
          </AsideFinishBuy>
          <AsideFinishBuy title="3 - CUPOM">
            <CouponForm handleSubmit={handleCouponFormSubmit} />
          </AsideFinishBuy>
        </div>
        <div className="col">
          <AsideFinishBuy title="4 - MÉTODO DE PAGAMENTO" class="paymentMethod">
            <PaymentForm paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
          </AsideFinishBuy>
        </div>
        <div className="col">
          <AsideFinishBuy title="5 - INFORMAÇÕES DO PEDIDO" class="itemsCart">
            <ProductsList products={cart} />
            <div className="info-cart">
              <Table infos={infos} />
            </div>
            <Link to='/perfil/pedidos'>
              <button onClick={() => finishBuy(15)}>Finalizar Compra</button>
            </Link>
          </AsideFinishBuy>
        </div>
      </main>
      <Footer />
    </div>
  );
}