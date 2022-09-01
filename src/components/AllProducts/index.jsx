import React, { useState } from "react";
import Card from "../Carrousel/Card";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../../components/SpinerLoader";
import "./index.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

export default function AllProducts({ products , orderBy}) {
  const { cart, productData } = useContext(CartContext)
  const [progress, setProgress] = useState(true);
  // numero 1  siginifica a pagina atual e lista pagina de 10 em 10 produtos
  // GEt
  const { data } = useFetch(`api/public/products/pages/1`);
  if (data == "") {
    return (
      <div className="containerSpiner">
        <div>{progress === false ? <div> </div> : <Loading />}</div>
      </div>
    );
  }
  if (!products) return;

  function compareFunction(a, b){
    if(orderBy == 'asc'){
      return(a.value - b.value)
    }else if(orderBy == 'desc'){
      return(b.value - a.value)
    }
    else{
      return;
    }
  }
  
      return(
        data.sort((a, b) => compareFunction(a, b))
        .map((product, index) => {
          return (
            <li key={index} className="swiper-container">
                <Link to={`/detalhes/${product.id}`}>
                  <Card product={product} />
                </Link>
            </li>
          );
        })
      )

  // switch(orderBy){
  //   case 'asc':
  //     return(
  //       data.sort(function(a, b){return a.value-b.value})
  //       .map((product, index) => {
  //         return (
  //           <li key={index} className="swiper-container">
  //               <Link to={`/detalhes/${product.id}`}>
  //                 <Card product={product} />
  //               </Link>
  //           </li>
  //         );
  //       })
  //     )
  //   case 'desc':
  //     return(
  //       data.sort(function(a, b){return b.value-a.value})
  //       .map((product, index) => {
  //         return (
  //           <li key={index} className="swiper-container">
  //               <Link to={`/detalhes/${product.id}`}>
  //                 <Card product={product} />
  //               </Link>
  //           </li>
  //         );
  //       })
  //     )
  //   default:
  //     return (
  //       data.map((product, index) => {
  //         return (
  //           <li key={index} className="swiper-container">
  //               <Link to={`/detalhes/${product.id}`}>
  //                 <Card product={product} />
  //               </Link>
  //           </li>
  //         );
  //       })
  //     )
  // }

  // return (
  //   <>
  //     {data.map((product, index) => {
  //       return (
  //         <li key={index} className="swiper-container">
  //             <Link to={`/detalhes/${product.id}`}>
  //               <Card product={product} />
  //             </Link>
  //         </li>
  //       );
  //     })}
  //   </>
  // );
}
