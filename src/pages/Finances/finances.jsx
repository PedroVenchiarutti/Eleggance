import React, { useEffect } from "react";
import "./finances.scss";
import RenderLineChart from "./graph";
import MenuDashboard from "../../components/MenuDashboard";
import CardFinance from "../../components/CardFinances/cardFinance";
import NavBarFinances from "../../components/NabBarFinance/navBarFinances";
import { useState } from "react";
import Api from "../../api/api";
import { useFetch } from "../../hooks/useFetch";

const Finances = (props) => {
  const getTheDateCurrent = (e) => {
    if (e.keyCode === 13) {
      const valorCurrent = e.target.value;
      const dataCurrent = valorCurrent.split("-");
      dataCurrent.reverse();
      const diaCurrent = dataCurrent[1];
      const mesCurrent = dataCurrent[0];
      const anoCurrent = dataCurrent[2];
      const currentData = diaCurrent + "-" + mesCurrent + "-" + anoCurrent;
      console.log(currentData);
    }
  };
  const getTheDate = (e) => {
    if (e.keyCode === 13) {
      const valor = e.target.value;
      const data = valor.split("-");
      data.reverse();
      const dia = data[1];
      const mes = data[0];
      const ano = data[2];
      const currentData = dia + "-" + mes + "-" + ano;
      console.log(currentData);
    }
  };


  
  const [products, setProducts] = useState([] );
  useEffect(() => {
    // Tem que trocar a rota para os produtos que foram vendidos
    Api.get(`api/public/products/pages/1`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        console.log("Deu tudo errado");
      });
  }, []);


  
  let valueTotal = 0;
  for (var i = 0; i < products.length; i++) {
    valueTotal += products[i].value;
  }

  let qtTotal = 0;
  for (var i = 0; i < products.length; i++) {
    qtTotal += products[i].qt;
  }



  const [showElement, setShowElement] = useState(false);
  const showOrHide = () => setShowElement(true);

  return (
    <div className="container-all-finances">
      <MenuDashboard />
      <div className="right-finances">
        <NavBarFinances />
        {/* */}
        <CardFinance />
        {/*  */}

        <div className="finances-graph">
          <div className="finances-graph-left">
            <div className="finances-graph-left-top">
              <h3>Vendas</h3>
              <p> de 25 de maio de 2022, 09:41 PM</p>
            </div>
            <div className="finances-graph-left-graph">
              <RenderLineChart  data = {products}/>
            </div>
          </div>
          <div className="finances-graph-right">
            <div className="finances-graph-right-info">
              <h3>Pedidos Mensais</h3>
              <h2>{products.length}</h2>
            </div>
            <div className="finances-graph-right-info">
              <h3>Produtos vendidos</h3>
              <h2>{qtTotal}</h2>
            </div>
            <div className="finances-graph-right-info">
              <h3>Valor mensal</h3>
              <h2>R$ {valueTotal}</h2>
            </div>
            <div className="finances-graph-right-info">
              <h3>Valor total</h3>
              <h2>0</h2>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bottom-finance">
          <div className="bottom-finance-top">
            <div className="bottom-finance-top-titles">
              <h1>Vendas</h1>
            </div>
            <div className="bottom-finance-top-username">
              <div>
                De <input type="date" onKeyDown={(e) => getTheDateCurrent(e)} />{" "}
                ate <input type="date" onKeyDown={(e) => getTheDate(e)} />{" "}
                <button
                  className="button-finance-filter-orders"
                  onClick={showOrHide}
                >
                  ORDENAR POR{" "}
                  <img
                    className="icon-menu-finance"
                    src="/icons/icon-menu.png"
                  />
                </button>{" "}
                {showElement ? (
                  <div className="li-filter-orders">
                    <li>Menor Preco</li>
                    <li>Maior Preco</li>
                    <li>Produto mais recente</li>
                    <li>Produto mais antigo</li>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="finances-table">
            <table className="table-finances">
              <thead>
                <tr>
                  <td>Pedidos</td>
                  <td>Quantidade</td>
                  <td>Valor</td>
                  <td>Codigo de venda</td>
                </tr>
              </thead>
              <tbody>
                {products.map((products, keys) => {
                  return (
                    <tr>
                      <td>{products.name}</td>
                      <td>{products.qt}</td>
                      <td>R$ {products.value}</td>
                      <td>{products.id}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="finance-value-final">
            <div className="finance-value-total">
              <h3>Valor Total: R$ 150,00</h3>
            </div>
            <div className="finance-total-sell">
              <h3> Vendas No Periodo: 777</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Finances;
