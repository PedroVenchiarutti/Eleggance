import React, { useState } from "react";
import Footer from "../Footer/Footer";
import AsideFinishBuy from "../../components/AsideFinishBuy/AsideFinishBuy";
import ProductsList from "../../components/ProductsLIst";
import "./FinishBuy.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import CouponForm from "../../components/FinishBuy/CouponForm";
import Api from "../../api/api";
import PaymentForm from "../../components/FinishBuy/PaymentForm";
import AddressForm from "../../components/FinishBuy/AddressForm/AddressForm";
import Table from "../../components/FinishBuy/Table";

export default function FinishBuy() {
  const { finishBuy } = useContext(CartContext);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);

  // Novo carrinho
  const userCart = JSON.parse(localStorage.getItem('user'))
  const products = userCart.productCart

  const sum = (accumulated, current) => (+accumulated ?? 0) + (+current ?? 0);
  // cart
  const subTotalPrice = products
    .map((product) => product.qt * product.value)
    .reduce(sum, 0);
  const infos = {
    //cart
    totalItems: products.map((product) => product.qt).reduce(sum, 0),
    subTotalPrice,
    shippingPrice: 19.99,
    paymentMethod,
    discount: {
      ...(paymentMethod && {
        byPaymentMethod:
          paymentMethod === "PIX"
            ? subTotalPrice * 0.1
            : paymentMethod === "BOLETO"
              ? subTotalPrice * 0.08
              : subTotalPrice * 0.05,
      }),
      ...(couponDiscount && {
        byCoupon: couponDiscount,
      }),
    },
  };

  const handleCouponFormSubmit = (event, couponCode) => {
    event.preventDefault();

    Api.get(
      `https://api-elegancce.herokuapp.com/api/public/discount/${couponCode}`
    )
      .then((resp) => setCouponDiscount(resp.data[0].discount))
      .catch(setCouponDiscount(0));
  };

  const [addressId, setAddressId] = useState('');
  const onAddressChange = (event) => setAddressId(event.target.value);

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
            <AddressForm addressId={addressId} onAddressChange={onAddressChange} />
          </AsideFinishBuy>
          <AsideFinishBuy title="2 - FRETE">
            <li>
              Sedex - prazo dias uteis - R${" "}
              {infos.shippingPrice.toFixed(2).replace(".", ",")}
            </li>
          </AsideFinishBuy>
          <AsideFinishBuy title="3 - CUPOM">
            <CouponForm handleSubmit={handleCouponFormSubmit} />
          </AsideFinishBuy>
        </div>
        <div className="col">
          <AsideFinishBuy title="4 - MÉTODO DE PAGAMENTO" class="paymentMethod">
            <PaymentForm
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          </AsideFinishBuy>
        </div>
        <div className="col">
          <AsideFinishBuy title="5 - INFORMAÇÕES DO PEDIDO" class="itemsCart">
            {/* <ProductsList products={cart} /> */}
            <ProductsList products={products} />
            <div className="info-cart">
              <Table infos={infos} />
            </div>
            <Link to="#">
              <button onClick={() => finishBuy(addressId)}>Finalizar Compra</button>
            </Link>
          </AsideFinishBuy>
        </div>
      </main>
      <Footer />
    </div>
  );
}
