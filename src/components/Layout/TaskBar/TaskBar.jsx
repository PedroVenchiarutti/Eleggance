import React from "react";
import "./TaskBar.scss";

export default (props) => {
  return (
    <div className="container-task-bar">
      <div className="columns-task-bar">
        <div className="content-icon">
          <div className="icon-task-bar">
            <img
              src="\icons\iconmonstr-delivery-1-96.png"
              alt="ImgIconeFrete"
              className="icon-taskBar"
            />
          </div>
          <ul>
            <li>
              <div className="h4-titulo">
                <h4>Frete Gratis</h4>
              </div>
            </li>
            <li>
              <div className="p-titulo">
                <p> Para compras acima de R$ 200 em todo o site</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="content-icon">
          <div className="icon-task-bar">
            <img
              src="\icons\icone-credit-card.png"
              alt="ImgIconeCard"
              className="icon-taskBar"
            />
          </div>
          <ul>
            <li>
              <div className="h4-titulo">
                <h4>10x Sem Juros</h4>
              </div>
            </li>
            <li>
              <div className="p-titulo">
                <p> Em todo o site e em todos os cartoes</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="content-icon">
          <div className="icon-task-bar">
            <img
              src="\icons\icon-boleto.png"
              alt="ImgIconeCard"
              className="icon-taskBar"
            />
          </div>
          <ul>
            <li>
              <div className="h4-titulo">
                <h4>5% de desconto</h4>
              </div>
            </li>
            <li>
              <div className="p-titulo">
                <p>A vista no boleto ou Pix direto no carrinho</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="content-icon">
          <div className="icon-task-bar">
            <img
              src="\icons\icon-lock.png"
              alt="ImgIconeCard"
              className="icon-taskBar"
            />
          </div>
          <ul>
            <li>
              <div className="h4-titulo">
                <h4>Site 100% seguro</h4>
              </div>
            </li>
            <li>
              <div className="p-titulo">
                <p> Compra segura, site com tecnologia SSL</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
