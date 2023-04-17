import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Movies from "./component/movies";

class App extends Component {
  state = {};
  render() {
    return (
      <main className="container m-4">
        <Movies />
      </main>
    );
  }
}

export default App;
