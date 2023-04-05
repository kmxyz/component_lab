import React, { Component } from 'react';
import {getMovies} from './fakeMovieService';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

var movieLength = getMovies().length
class Movies extends Component {
    state = {
        items : getMovies(),
        cal : ["Title", "Genre", "Stock", "Rate", "button"]
    }

    deleteMovie = (movie) => {
        let movies = this.state.items.filter( (m) => m._id !== movie._id);
        this.setState({items : movies});
        movieLength = movies.length;
        getMovieData();
    }

    render() { 
        return (
            
            <table className="table">
                <thead>
                    <tr>
                        {this.state.cal.map(cal => <th>{cal}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {this.state.items.map(item => (
                    <tr>
                        <td>{item.title}</td>
                        <td>{item.genre.name}</td>
                        <td>{item.numberInStock}</td>
                        <td>{item.dailyRentalRate}</td>
                        <td><button onClick={() => this.deleteMovie(item)} className='button.btn.btn-danger.btn-sm'>Delete</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>

            
        );
    }
}

export function getMovieData ( ) {
    return movieLength;
}

export default Movies;