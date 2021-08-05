import React, { Component } from 'react';
import './App.css';
import MoviesContainer from './Movies/moviesContainer.js';

class App extends Component {
  state = {
    Movies: [
      { id: '0', name: 'Someone fall in the Coco nest'},
      { id: '1', name: 'Forrest Gump' },
      { id: '2', name: 'Léon: The Professional' }
    ],
    
    showMovies: false
  }

  nameChangedHandler = ( event, id ) => {
    const movieIndex = this.state.Movies.findIndex(mo => {
      console.log (id)
      console.log (mo.id )
      return mo === id;
    });

    const movie = {
      ...this.state.Movies[movieIndex]
    };
    console.log (movie)
    console.log(movieIndex)
   

    movie.name = event.target.value;

    const movies = [...this.state.Movies];
    movies[movieIndex] = movie;

    this.setState( {Movies: movies} );
  }

  deletemovieHandler = (movieIndex) => {
  
    const movies = [...this.state.Movies];
    console.log (movies)
    movies.splice(movieIndex, 1);
    this.setState({Movies: movies});
  }

  toggleMovieHandler = () => {
    const doShow = this.state.showMovies;
    this.setState( { showMovies: !doShow } );
  }

  render () {
    const style = {
      backgroundColor: '#FCBB6D',
      font: 'inherit',
     
      padding: '8px',
      cursor: 'pointer'
    };

    let Movies = null;

    if ( this.state.showMovies ) {
      Movies = (<MoviesContainer moviesList= {this.state.Movies} click = {this.deletemovieHandler} changed = {this.nameChangedHandler}/>
       
      );
    }

    return (
      <div className="App">
       
       <h1 style ={{paddingTop:"50px", color: "#D8737F", marginTop:"0px"}}>Movies</h1>
        <button
          style={style}
          onClick={this.toggleMovieHandler}>Toggle Movies</button>
        {Movies}
      </div>
    );
    
  }
}

export default App;
