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
import ShopFilter from "../../components/ShopFilter";

export default function Shop({ products }) {
  const { cart } = useContext(CartContext);
  // const [filter, setFilter] = useState('')

  // const handleChange = event => {
  //   console.log(event.target.value)
  //   setFilter(event.target.value)
  // }

  const orderByOptions = [
    { value: "desc", text: "maior preço" },
    { value: "asc", text: "menor preço" },
  ];
  const [selectValue, setSelectValue] = useState("");
  const updateSelectState = (event) => setSelectValue(event.target.value);


  const [minPrice, setMinPrice] = useState("1");
  const [maxPrice, setMaxPrice] = useState("3000");
  const [brands, setBrands] = useState([
    "newHair",
    "natura",
    "boticario",
    "avon",
  ]);

  // function compareFunction(a, b) {
  //   if (orderBy == "asc") {
  //     return a.value - b.value;
  //   } else if (orderBy == "desc") {
  //     return b.value - a.value;
  //   } else {
  //     return;
  //   }
  // }

  function toggleBrands(brand) {
    if (brands.includes(brand)) {
      console.log(brands);
      setBrands((current) =>
        current.filter((current) => {
          return current !== brand;
        })
      );
    } else {
      // brands.concat(brand)
      setBrands((current) => [...current, brand]);
    }
  }


  return (
    <div className="shopContainer">
      <Navbar />
      <main>
        <div className="col-2">
          <Select
            label="ordenar por:"
            options={orderByOptions}
            onChange={updateSelectState}
            value={selectValue}
            placeholder={selectValue}
          />
          <div className="filterAndProducts">
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


            <div className="ul-products">
              {/* <ul className="products-container"> */}
              <AllProducts products={shelfProducts} orderBy={selectValue} minPrice={minPrice} maxPrice={maxPrice} brands={brands} />
              {/* </ul> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
