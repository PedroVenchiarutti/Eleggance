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

  return (
    <div className="shopContainer">
      <Navbar />
      <main>
        <ShopFilter />
        <div className="col-2">
          <div className="ul-products">
            <Select
              label="ordenar por:"
              options={orderByOptions}
              onChange={updateSelectState}
              value={selectValue}
              placeholder={selectValue}
            />
            <ul className="products-container">
              <AllProducts products={shelfProducts} orderBy={selectValue} />
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
