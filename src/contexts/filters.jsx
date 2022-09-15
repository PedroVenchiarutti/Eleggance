import React, { createContext } from "react";

export const filtersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [brandsSelected, setBrandsSelected] = React.useState([]);

  return (
    <filtersContext.Provider
      value={{
        brandsSelected,
        setBrandsSelected,
      }}
    >
      {children}
    </filtersContext.Provider>
  );
};
