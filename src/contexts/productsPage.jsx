import React, { useState, createContext } from "react";

export const PageContext = createContext();
export const PageProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  const state = {
    page,
    setPage,
  };

  return <PageContext.Provider value={state}>{children}</PageContext.Provider>;
};
