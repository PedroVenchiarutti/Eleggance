import React, { createContext } from "react";

export const filtersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [brandsSelected, setBrandsSelected] = React.useState([]);
  const [minPrice, setMinPrice] = React.useState(15);
  const [maxPrice, setMaxPrice] = React.useState(300);

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
