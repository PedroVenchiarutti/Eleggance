import React from "react";

export default function ModalOffer(offerPrice, valor, {setValor}) {

   // const min = 1
   // const max = 100
   function setOffer(price) {
      // setValor({ ...valor, price: price})
      const value = Math.max(min, Math.min(max, Number(price)));
      setOfferPrice(value)
      setValor({ ...valor, pricepromo: valor.value * (value / 100) })
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
         <input className="finalValue" type="number" readOnly value={(offerPrice)} />
      </div>
   )
}