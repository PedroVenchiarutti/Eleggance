import React from "react";
import Footer from "../Footer/Footer";
import AsideFinishBuy from "../../components/AsideFinishBuy/AsideFinishBuy";
import ProductsList from "../../components/ProductsLIst";
import { shelfProducts } from "../../api/mock";
import "./FinishBuy.scss";

export default function FinishBuy({ products }) {
  let countItems = 5;
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
              <input placeholder="INSERIR CUPOM" type="text" />
              <button>OK</button>
            </li>
          </AsideFinishBuy>
        </div>
        <div className="col">
          <AsideFinishBuy title="4 - MÉTODO DE PAGAMENTO" class="paymentMethod">
            <div className="payment-methods">
              <li className="PaymentMethod">
                <img
                  className="iconPaymentMethod"
                  src="../../public/icons/icon-pix.svg"
                />
                PIX
              </li>
              <li className="PaymentMethod">
                <img
                  className="iconPaymentMethod"
                  src="../../public/icons/icon-boleto.png"
                />
                BOLETO
              </li>
              <li className="PaymentMethod">
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
            </div>
            <button>Finalizar Compra</button>
          </AsideFinishBuy>
        </div>
      </main>
      <Footer />
    </div>
  );
}
