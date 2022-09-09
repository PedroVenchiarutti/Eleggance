import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { PageContext } from "../../contexts/productsPage.jsx";
import { useFetch } from "../../hooks/useFetch";

export default function Pagination() {
  const { page, setPage } = useContext(PageContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api-elegancce.herokuapp.com/api/public/products/pages/${
          page + 1
        }`
      )
      .then((response) => {
        if (page === 1) {
          let btnPrev = document.getElementById("prev");
          btnPrev.style.visibility = "hidden";
        } else {
          let btnPrev = document.getElementById("prev");
          btnPrev.style.visibility = "";
        }
        if (response.data.length === 0) {
          let btnNext = document.getElementById("next");
          btnNext.style.visibility = "hidden";
        } else {
          let btnNext = document.getElementById("next");
          btnNext.style.visibility = "";
        }
      });
  }, [page]);

  function handleNextPage() {
    setPage(page + 1);
  }

  function handlePreviousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <ul className="pagination-container">
      <li id="prev" onClick={handlePreviousPage} className="buttonChangePage">
        <button> {"<"} anterior </button>
      </li>
      <li className="currentPage">{page}</li>
      <li onClick={handleNextPage} className="buttonChangePage" id="next">
        <button>seguinte {">"}</button>
      </li>
    </ul>
  );
}
