import React, { Component } from "react";

const Genre = (props) => {
  return (
    <ul className="list-group">
      {props.genreData.map((data) => (
        <li
          className={
            props.selectG === data
              ? "list-group-item active"
              : "list-group-item "
          }
          key={data._id}
          onClick={() => props.onClickedG(data)}
        >
          {data.name}
        </li>
      ))}
    </ul>
  );
};

export default Genre;
