import React from "react";
import { Navbar } from "../../components/Navbar";
import "./shop.scss";
import Footer from "../Footer/Footer";
import AllProducts from "../../components/AllProducts/index";

import { shelfProducts } from "../../api/mock";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import { useState } from "react";
import Select from "../../components/Select/Select";

export default function Shop({ products }) {

  const { cart } = useContext(CartContext)
  // const [filter, setFilter] = useState('')

  // const handleChange = event => {
  //   console.log(event.target.value)
  //   setFilter(event.target.value)
  // }

  const orderByOptions = [
    {value: 'asc', text:'maior preço'},
    {value: 'desc', text:'menor preço'}
  ]
  const [selectValue, setSelectValue] = useState("");
  const updateSelectState = (event) => setSelectValue(event.target.value);

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
                <label>Feminino</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Unissex</label>
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
          {/* <select value={filter} onChange={handleChange} placeholder="Ordenar Por">
            <option value="volvo">Mais Procurados</option>
            <option value="asc">Preço: Ordem Crescente</option>
            <option value="desc">Preço: Ordem Decrescente</option>
          </select> */}
          <div className="ul-products">
            <Select label='ordenar por:' options={orderByOptions} onChange={updateSelectState}/>
            <ul>
              <AllProducts products={shelfProducts} orderBy={selectValue}/>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
