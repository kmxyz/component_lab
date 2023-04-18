import React, { Component } from "react";
import { getMovies } from "../data/fakeMovieService";
import Pagination from "./pagination";
import { paginate } from "../utils/pagination";
import { getGenres } from "../data/fakeGenreService";
import Genre from "./genres";
import MovieTable from "./movieTable";

class Movies extends Component {
  state = {
    selectG: null,
    genreData: [],
    items: [],
    cal: ["Title", "Genre", "Stock", "Rate", "", "  "],
    maxItemsInOnePage: 4,
    currentlyPage: 1,
  };

  componentDidMount() {
    const allGenre = [{ name: "All Genre" }, ...getGenres()];
    this.setState({ items: getMovies(), genreData: allGenre });
  }

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
    if (movies[index].like === true) {
      alert("Add like success !");
    }
  };

  headleOnClickPagination = (page) => {
    this.setState({ currentlyPage: page });
  };

  headleOnClickG = (genre) => {
    this.setState({ selectG: genre, currentlyPage: 1 });
  };

  render() {
    const { items, cal, maxItemsInOnePage, currentlyPage, genreData, selectG } =
      this.state;
    if (items.length === 0) {
      return "there is no moive in the database.";
    }

    const filter =
      selectG && selectG._id
        ? items.filter((m) => m.genre._id === selectG._id)
        : items;

    const allMovies = paginate(filter, currentlyPage, maxItemsInOnePage);

    return (
      <div className="row">
        <div className="col-3 m-5">
          <Genre
            genreData={genreData}
            onClickedG={this.headleOnClickG}
            selectG={selectG}
          />
        </div>
        <div className="col">
          <MovieTable
            filter={filter}
            cal={cal}
            allMovies={allMovies}
            onHeadleOnClick={this.headleOnClick}
            onDeleteMovie={this.deleteMovie}
          />
          <Pagination
            maxItemsInOnePage={maxItemsInOnePage}
            currentlyPage={currentlyPage}
            totalItems={filter.length}
            onClicked={this.headleOnClickPagination}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
