<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> 9615ba468789ac3813a424f2ca848287df4c6950
import Footer from "../Footer/Footer";
import AsideFinishBuy from "../../components/AsideFinishBuy/AsideFinishBuy";
import ProductsList from "../../components/ProductsLIst";
import { shelfProducts } from "../../api/mock";
import "./FinishBuy.scss";

<<<<<<< HEAD
export default function FinishBuy({ products }) {
  let countItems = 5;
=======
// let inputCupom = document.querySelector("#fieldCoupon");
// inputCupom.addEventListener("change", (e) => {
//   console.log(e);
// });

export default function FinishBuy({ products }) {
  const [valor, setValor] = useState("");
  let countItems = 12;
>>>>>>> 9615ba468789ac3813a424f2ca848287df4c6950
  let metodoDesconto = "PIX" || "CUPON";
  let prazoMin = 2;
  let prazoMax = 5;
  const valorDesconto = 3.0;
  const prazo = `${prazoMin} a ${prazoMax}`;
  const valorFrete = 8.99;
  const valorSubTotal = 1200.0;
  const valorTotal = valorSubTotal + valorFrete - valorDesconto;

  return (
    <div className="finishBuyContainer">
      <header>
        <h1 className="logo">Ellegance</h1>
        <h1>Finalizar Compra</h1>
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
              <img src="../../public/icons/icon-edit.svg" />
            </div>
          </AsideFinishBuy>
          <AsideFinishBuy title="2 - FRETE">
            <li>
              Sedex - {prazo} dias uteis - R$ {valorFrete}
            </li>
          </AsideFinishBuy>
          <AsideFinishBuy title="3 - CUPOM">
            <li>
<<<<<<< HEAD
              <input placeholder="INSERIR CUPOM" type="text" />
=======
              <input
                maxLength={7}
                style={{ textTransform: "uppercase" }}
                placeholder="INSERIR CUPOM"
                id="fieldCoupon"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                type="text"
              />
>>>>>>> 9615ba468789ac3813a424f2ca848287df4c6950
              <button>OK</button>
            </li>
          </AsideFinishBuy>
        </div>
        <div className="col">
          <AsideFinishBuy title="4 - MÉTODO DE PAGAMENTO" class="paymentMethod">
            <div className="payment-methods">
<<<<<<< HEAD
              <li className="PaymentMethod">
=======
              <li>
>>>>>>> 9615ba468789ac3813a424f2ca848287df4c6950
                <img
                  className="iconPaymentMethod"
                  src="../../public/icons/icon-pix.svg"
                />
                PIX
              </li>
<<<<<<< HEAD
              <li className="PaymentMethod">
=======
              <li>
>>>>>>> 9615ba468789ac3813a424f2ca848287df4c6950
                <img
                  className="iconPaymentMethod"
                  src="../../public/icons/icon-boleto.png"
                />
                BOLETO
              </li>
<<<<<<< HEAD
              <li className="PaymentMethod">
=======
              <li>
>>>>>>> 9615ba468789ac3813a424f2ca848287df4c6950
                <img
                  className="iconPaymentMethod"
                  src="../../public/icons/icone-credit-card.png"
                />
                CARTÃO DE CRÉDITO
              </li>
            </div>
          </AsideFinishBuy>
        </div>
        <div className="col">
          <AsideFinishBuy title="5 - INFORMAÇÕES DO PEDIDO" class="itemsCart">
            <ProductsList products={shelfProducts}></ProductsList>
            <div className="info-cart">
<<<<<<< HEAD
              <div className="info-buy">
                <ul>
                  <li>Subtotal ( {countItems} )</li>
                  <li>Entrgea</li>
                  <li>Desconto do {metodoDesconto}</li>
                  <li>Total</li>
                </ul>
              </div>
              <div className="value-buy">
                <li>R$ {valorSubTotal}</li>
                <li>R$ {valorFrete}</li>
                <li>R$ {valorDesconto}</li>
                <li>R$ {valorTotal}</li>
              </div>
=======
              <table>
                <tbody>
                  <tr>
                    <td>Subtotal ({countItems})</td>
                    <td>R$ {valorSubTotal}</td>
                  </tr>
                  <hr />
                  <tr>
                    <td>Entrega</td>
                    <td>R$ {valorFrete}</td>
                  </tr>
                  <hr />
                  <tr>
                    <td>Desconto do {metodoDesconto}</td>
                    <td>R$ {valorDesconto}</td>
                  </tr>
                  <hr />
                  <tr>
                    <td>Total</td>
                    <td>R$ {valorTotal}</td>
                  </tr>
                </tbody>
              </table>
>>>>>>> 9615ba468789ac3813a424f2ca848287df4c6950
            </div>
            <button>Finalizar Compra</button>
          </AsideFinishBuy>
        </div>
      </main>
      <Footer />
    </div>
  );
}
