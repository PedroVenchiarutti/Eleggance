import React from "react";
import { useState } from "react";

export default function ShopFilter({
  toggleBrands,
  setMinPrice,
  setMaxPrice,
  minPrice,
  maxPrice,
  brands,
}) {
  function toggleModalFilter() {
    let modal = document.querySelector(".modalFilter");
    modal.classList.toggle("hidden");
  }

  return (
    <aside className="filter">
      <div className="modal hidden modalFilter" id="modalFilter">
        <ul className="filter">
          <div className="row">
            <h1>Filtrar</h1>
            <button onClick={toggleModalFilter}>X</button>
          </div>

          <h2>Marca</h2>
          {brands.map((brand) => (
            <li>
              <input
                type="checkbox"
                defaultChecked
                value={brand}
                onClick={(e) => toggleBrands(e.target.value)}
              />
              <label>{brand}</label>
            </li>
          ))}
          <hr />
          <h2>Preço</h2>
          <div className="filter-by-price">
            <li>
              <label> de </label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </li>
            <li>
              <label>Até</label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </li>
          </div>
        </ul>
      </div>
    </aside>
  );
}
