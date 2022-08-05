import React from "react";
import { Navbar } from "../../components/Navbar";
import "./shop.scss";
import Footer from "../Footer/Footer";
import AllProducts from "../../components/AllProducts/index";

import { shelfProducts } from "../../api/mock";

export default function Shop({ products }) {
  return (
    <div className="shopContainer">
      <Navbar />
      <main>
        <aside>
          <div className="modal">
            <ul>
              <h1>Filtrar</h1>
              <hr />
              <li>
                <input type="checkbox" />
                <label>Frete Grátis</label>
              </li>
              <hr />
              <h2>Gênero</h2>
              <li>
                <input type="checkbox" />
                <label>Masculino</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>feminino</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>sem Gênero</label>
              </li>
              <hr />
              <h2>Marca</h2>
              <li>
                <input type="checkbox" />
                <label>New Hair</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Natura</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>O Boticário</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Avon</label>
              </li>
              <hr />
              <h2>Preço</h2>
              <div className="filter-by-price">
                <li>
                  <label> de </label>
                  <input type="number" />
                </li>
                <li>
                  <label>Até</label>
                  <input type="number" />
                </li>
              </div>
              <button className="button-apply">Aplicar</button>
            </ul>
          </div>
        </aside>
        <div className="col-2">
          <select placeholder="Ordenar Por">
            <option value="volvo">Mais Procurados</option>
            <option value="saab">Preço: Ordem Crescente</option>
            <option value="mercedes">Preço: Ordem Decrescente</option>
          </select>

          <ul>
            <AllProducts products={shelfProducts} />
            <AllProducts products={shelfProducts} />
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
