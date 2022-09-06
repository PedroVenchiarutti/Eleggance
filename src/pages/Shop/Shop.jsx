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
            <ShopFilter toggleBrands={toggleBrands} minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
            <div className="ul-products">
              <AllProducts products={shelfProducts} orderBy={selectValue} minPrice={minPrice} maxPrice={maxPrice} brands={brands} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
