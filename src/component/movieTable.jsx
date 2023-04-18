import React, { Component } from "react";
import Like from "./like";

const MovieTable = (props) => {
  const { filter, cal, allMovies, onHeadleOnClick, onDeleteMovie } = props;
  return (
    <div>
      <p>Showing {filter.length} moives in the database</p>
      <table className="table">
        <thead>
          <tr>
            {cal.map((cal) => (
              <th key={cal}>{cal}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allMovies.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.genre.name}</td>
              <td>{item.numberInStock}</td>
              <td>{item.dailyRentalRate}</td>
              <td>
                <Like
                  like={item.like}
                  onClicked={() => onHeadleOnClick(item)}
                />
              </td>
              <td>
                <button
                  onClick={() => onDeleteMovie(item)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
