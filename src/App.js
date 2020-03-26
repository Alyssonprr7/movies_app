import React from 'react';
import './style/App.css';
import {getStarWarsMovies} from './api/movies';
import  MovieCard from './components/movieCard' 


class App extends React.Component{
  state = {
    movies:[],
    err:null
  }

  componentDidMount(){
    getStarWarsMovies()
    .then(moviesFromApi => 
      this.setState(() => {
        return {
          movies: moviesFromApi
        } 
      }
      )
    ).catch()
  }
  render(){
    return (
      <>
      <div className="App">
        {this.state.movies.map(myMovie => {
          return <MovieCard movie = {myMovie} />
        })}
      </div>
    </>
    );
  }
}

export default App;
