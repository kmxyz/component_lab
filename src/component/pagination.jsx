import React, { Component } from "react";
import _ from "lodash";

const Pagination = (props) => {
  const pages = props.totalItems / props.maxItemsInOnePage;
  if (pages <= 1) return null;
  const pagesA = _.range(1, pages + 1);
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pagesA.map((PageNumber) => (
            <li
              key={PageNumber}
              className={
                props.currentlyPage === PageNumber
                  ? "page-item active"
                  : "page-item "
              }
            >
              <a
                onClick={() => props.onClicked(PageNumber)}
                className="page-link"
              >
                {PageNumber}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
