import React from "react"
import { useState } from "react"

export default function ShopFilter({ toggleBrands, setMinPrice, setMaxPrice, minPrice, maxPrice }) {

  return (
    <aside className="filter">
      <div className="modal">
        <ul className="filter">
          <h1>Filtrar</h1>
          <h2>Marca</h2>
          <li>
            <input
              type="checkbox"
              defaultChecked
              value="newHair"
              onClick={(e) => toggleBrands(e.target.value)}
            />
            <label>New Hair</label>
          </li>
          <li>
            <input
              type="checkbox"
              defaultChecked
              value="natura"
              onClick={(e) => toggleBrands(e.target.value)}
            />
            <label>Natura</label>
          </li>
          <li>
            <input
              type="checkbox"
              defaultChecked
              value="boticario"
              onClick={(e) => toggleBrands(e.target.value)}
            />
            <label>O Boticário</label>
          </li>
          <li>
            <input
              type="checkbox"
              defaultChecked
              value="avon"
              onClick={(e) => toggleBrands(e.target.value)}
            />
            <label>Avon</label>
          </li>
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
  )

}