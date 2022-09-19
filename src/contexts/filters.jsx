import React, { createContext, useState } from "react";

export const filtersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [brandsSelected, setBrandsSelected] = useState([]);
  const [minPrice, setMinPrice] = useState(15);
  const [maxPrice, setMaxPrice] = useState(300);

  return (
    <filtersContext.Provider
      value={{
        brandsSelected,
        setBrandsSelected,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
      }}
    >
      {children}
    </filtersContext.Provider>
  );
};
