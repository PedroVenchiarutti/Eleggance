import React, { useContext } from "react";
import { filtersContext } from "../../contexts/filters";

export default function ShopFilter({
  toggleBrands,
  setMinPrice,
  setMaxPrice,
  minPrice,
  maxPrice,
  brands,
}) {
  const { brandsSelected, setBrandsSelected } = useContext(filtersContext);

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
            <li
              key={brand}
              onClick={(e) => {
                if (brandsSelected.indexOf(brand) >= 0) {
                  setBrandsSelected(
                    brandsSelected.filter((item) => item !== brand)
                  );
                  e.nativeEvent.path[0].style = "color: #fcfcfc;";
                } else {
                  setBrandsSelected((current) => [...current, brand]);
                  e.nativeEvent.path[0].style = "color: #e1ab38;";
                }
              }}
            >
              <a htmlFor={brand}>{brand}</a>
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
