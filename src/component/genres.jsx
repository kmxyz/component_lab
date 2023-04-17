import React, { Component } from "react";

const Genre = (props) => {
  return (
    <ul className="list-group">
      {props.genreData.map((data) => (
        <li className="list-group-item" key={data._id}>
          {data.name}
        </li>
      ))}
    </ul>
  );
};

export default Genre;
