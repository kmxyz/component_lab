import React, { Component } from "react";
import { getMovies } from "../data/fakeMovieService";
import Like from "./like";
import Pagination from "./pagination";
import { paginate } from "../utils/pagination";
import { getGenres } from "../data/fakeGenreService";
import Genre from "./genres";

class Movies extends Component {
  state = {
    genreData: getGenres(),
    items: getMovies(),
    cal: ["Title", "Genre", "Stock", "Rate", "", "  "],
    maxItemsInOnePage: 4,
    currentlyPage: 1,
  };

  deleteMovie = (movie) => {
    const movies = this.state.items.filter((m) => m._id !== movie._id);
    this.setState({ items: movies });
  };

  headleOnClick = (movie) => {
    const movies = [...this.state.items];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].like = !movies[index].like;
    this.setState({ items: movies });
  };

  headleOnClickPagination = (page) => {
    this.setState({ currentlyPage: page });
  };

  render() {
    const { items, cal, maxItemsInOnePage, currentlyPage, genreData } =
      this.state;
    if (items.length === 0) {
      return "there is no moive in the database.";
    }
    const allMovies = paginate(items, currentlyPage, maxItemsInOnePage);

    return (
      <div className="row">
        <div className="col-3 m-5">
          <Genre genreData={genreData} />
        </div>
        <div className="col">
          <p>Showing {items.length} moives in the database</p>
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
                      onClicked={() => this.headleOnClick(item)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.deleteMovie(item)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            maxItemsInOnePage={maxItemsInOnePage}
            currentlyPage={currentlyPage}
            totalItems={items.length}
            onClicked={this.headleOnClickPagination}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
