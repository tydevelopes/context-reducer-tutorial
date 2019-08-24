import React, { useState, useEffect } from "react";
import "./pagination.css";

const Pagination = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsToRender, setItemsToRender] = useState([]);

  //console.log(items);

  const renderPage = page => {
    //console.log(page);
    const counter = Math.min(items.length, page * itemsPerPage);
    let itemsToRender = [];

    for (let i = (page - 1) * itemsPerPage; i < counter; i++) {
      //console.log(i);

      itemsToRender.push(items[i]);
    }
    setCurrentPage(page);
    setItemsToRender(itemsToRender);
  };

  const gotoPrevPage = currentPage => {
    if (currentPage === 1) {
      return;
    }
    renderPage(currentPage - 1);
  };

  const gotoNextPage = currentPage => {
    if (currentPage === Math.ceil(items.length / itemsPerPage)) {
      return;
    }
    renderPage(currentPage + 1);
  };

  useEffect(() => {
    console.log("useeffect");

    renderPage(1);
  }, [items]);

  const len = Math.ceil(items.length / itemsPerPage);
  const pages = Array.from({ length: len }, (_, i) => i).map((item, index) => {
    return (
      <span onClick={() => renderPage(index + 1)} key={index}>
        {index + 1}
      </span>
    );
  });

  return (
    <div className="paginated">
      <ul className="paginated_lists">{itemsToRender}</ul>
      <div className="paginated_pages">
        <span onClick={() => gotoPrevPage(currentPage)}>{"<<"}</span>
        {pages}
        <span onClick={() => gotoNextPage(currentPage)}>{">>"}</span>
      </div>
    </div>
  );
};

export default Pagination;
