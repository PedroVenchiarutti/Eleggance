import React, { useState } from "react";
import { useEffect } from "react";

export default function ModalOffer({ valor, setValor }) {
   const [offerPrice, setOfferPrice] = useState('0')
   const [finalPrice, setFinalPrice] = useState('0')
   // const data = {
   //    valor
   // }
   // useEffect(() => {
   //    setValor({
   //       ...valor
   //    })
   // },[])
   console.log(valor)

   const min = 1
   const max = 100
   function setOffer(price) {
      const value = Math.max(min, Math.min(max, Number(price)));
      setOfferPrice(value)
      setFinalPrice(valor.value - (valor.value * (offerPrice / 100)))
      setValor({
         ...valor,
         pricepromo: finalPrice
      }, console.log(valor))
   }

   return (
      <div id="offer">
         <label>Valor da oferta em %</label>
         <input
            type="number"
            value={offerPrice}
            onChange={e => setOffer(e.target.value)}
         />
         <label>Valor final</label>
         <input className="finalValue" type="number" readOnly value={valor.pricepromo} />
      </div>
   )
}