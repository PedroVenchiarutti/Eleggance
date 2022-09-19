import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { PageContext } from "../../contexts/productsPage.jsx";
import { filtersContext } from "../../contexts/filters.jsx";

export default function Pagination() {
  const { page, setPage } = useContext(PageContext);
  const { minPrice, maxPrice } = useContext(filtersContext);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://api-elegancce.herokuapp.com/api/public/filter/?to=${maxPrice}&from=${minPrice}`
      )
      .then((response) => {
        setTotalPages(Math.ceil(response.data.length / 10));
      });
  }, [page, minPrice, maxPrice]);

  function handleNextPage() {
    document.body.scrollTop = 0;
    setPage(page + 1);
  }

  function handlePreviousPage() {
    document.body.scrollTop = 0;
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function showButtons() {
    if (totalPages > 1) {
      if (page === 1) {
        return (
          <>
            <li className="currentPage">{page}</li>
            <li onClick={handleNextPage} className="buttonChangePage" id="next">
              <button>{page + 1}</button>
            </li>
          </>
        );
      } else if (page === totalPages) {
        return (
          <>
            <li
              id="prev"
              onClick={handlePreviousPage}
              className="buttonChangePage"
            >
              <button> {page - 1} </button>
            </li>
            <li className="currentPage">{page}</li>
          </>
        );
      } else {
        return (
          <>
            <li
              id="prev"
              onClick={handlePreviousPage}
              className="buttonChangePage"
            >
              <button> {page - 1} </button>
            </li>
            <li className="currentPage">{page}</li>
            <li onClick={handleNextPage} className="buttonChangePage" id="next">
              <button>{page + 1}</button>
            </li>
          </>
        );
      }
    }
  }

  return <ul className="pagination-container">{showButtons()}</ul>;
}
