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
import Pagination from "../../components/Pagination/Pagination";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";
import axios from "axios";

export default function Shop({ products }) {
  const { cart } = useContext(CartContext);

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

  useEffect(() => {
    axios
      .get("https://api-elegancce.herokuapp.com/api/public/products")
      .then((response) => {
        response.data.map((response) => setBrands([...brands, response.brand]));
        console.log(brands);
      });
  }, []);

  function toggleBrands(brand) {
    if (brands.includes(brand)) {
      console.log(brands);
      setBrands((current) =>
        current.filter((current) => {
          return current !== brand;
        })
      );
    } else {
      setBrands((current) => [...current, brand]);
    }
  }

  function toggleModalFilter() {
    let modal = document.querySelector(".modalFilter");
    modal.classList.toggle("hidden");
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
            <label id="buttonToggleFilter" onClick={toggleModalFilter}>
              Filtrar
            </label>
            <ShopFilter
              toggleBrands={toggleBrands}
              minPrice={minPrice}
              maxPrice={maxPrice}
              brands={brands}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
            />
            <div className="ul-products">
              <AllProducts
                products={shelfProducts}
                orderBy={selectValue}
                minPrice={minPrice}
                maxPrice={maxPrice}
                brands={brands}
              />
            </div>
          </div>
        </div>
      </main>
      <Pagination></Pagination>
      <Footer />
    </div>
  );
}
