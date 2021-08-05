import React, { Component } from 'react';
import Movie from './Movie';

class MoviesContainer extends Component {

    render() {
        const {moviesList, changed, click}=this.props
        return (
            // we can have it without div becouse it is a list
            <div>{
            moviesList.map((movie,index) => 
               <Movie
               index= {index}
                click={click}
                name={movie.name} 
                age={movie.age}
                key={movie.id}
                changed={changed}
                item = {movie}
                />
               
            )}
          </div>
             
        );
    }
}

export default MoviesContainer;