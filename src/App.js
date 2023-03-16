import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Movies from './component/movies';
import { getMovieLength } from './component/movies';

class App extends Component {
  state = { 
    movies : getMovieLength(Movies)
  } 

  showMovies = () => {
    if(this.state.movies === 0 ){return "These is no movie in the database"};
    return "showing "+ this.state.movies +" movies in the database" ;
  }


  /* good job */
  showTabel = () =>{
    if(this.state.movies === 0 ){return ""};
    return <Movies />;
  }

  render() { 
    return (
      <main className='container'>
        
        {this.showMovies()}

        {this.showTabel()}
      </main>
    );
  }
}
 
export default App;
