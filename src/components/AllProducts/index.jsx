import React, { useState } from "react";
import Card from "../Carrousel/Card";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../../components/SpinerLoader";
import "./index.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

export default function AllProducts({ products, orderBy }) {
  const { cart, productData } = useContext(CartContext)
  const [progress, setProgress] = useState(true);
  // numero 1  siginifica a pagina atual e lista pagina de 10 em 10 produtos
  // GEt
  const { data } = useFetch(`api/public/products/pages/1`);
  const [minPrice, setMinPrice] = useState('1')
  const [maxPrice, setMaxPrice] = useState('3000')
  const [brands, setBrands] = useState(['newHair', 'natura', 'boticario', 'avon'])
  if (data == "") {
    return (
      <div className="containerSpiner">
        <div>{progress === false ? <div> </div> : <Loading />}</div>
      </div>
    );
  }
  if (!products) return;

  function compareFunction(a, b) {
    if (orderBy == 'asc') {
      return (a.value - b.value)
    } else if (orderBy == 'desc') {
      return (b.value - a.value)
    }
    else {
      return;
    }
  }

  function toggleBrands(brand) {
    if(brands.includes(brand)){
      console.log(brands)
      setBrands(current =>
        current.filter(current => {
          return current !== brand;
        }),
      );
    } else {
      // brands.concat(brand)
      setBrands(current => [...current, brand])
    }

  }

  return (
    <>
      <aside>
        <div className="modal">
          <ul>
            <h1>Filtrar</h1>
            {/* <hr />
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
            <hr /> */}
            <h2>Marca</h2>
            <li>
              <input type="checkbox" defaultChecked  value="newHair" onClick={(e) => toggleBrands(e.target.value)}/>
              <label>New Hair</label>
            </li>
            <li>
              <input type="checkbox" defaultChecked value="natura" onClick={(e) => toggleBrands(e.target.value)} />
              <label>Natura</label>
            </li>
            <li>
              <input type="checkbox" defaultChecked value="boticario" onClick={(e) => toggleBrands(e.target.value)}/>
              <label>O Boticário</label>
            </li>
            <li>
              <input type="checkbox" defaultChecked value="avon" onClick={(e) => toggleBrands(e.target.value)}/>
              <label>Avon</label>
            </li>
            <hr />
            <h2>Preço</h2>
            <div className="filter-by-price">
              <li>
                <label> de </label>
                <input type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
              </li>
              <li>
                <label>Até</label>
                <input type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
              </li>
            </div>
            <button className="button-apply" type="submit">Aplicar</button>
          </ul>
        </div>
      </aside>

      {data.sort((a, b) => compareFunction(a, b))
        .map((product, index) => {
          if (product.value >= minPrice && product.value <= maxPrice && brands.includes(product.brand)) {
            return (
              <li key={index} className="swiper-container">
                <Link to={`/detalhes/${product.id}`}>
                  <Card product={product} />
                </Link>
              </li>
            );
          } else {
            return;
          }
        })}
    </>
  )

}
