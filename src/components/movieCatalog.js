import React from 'react';
import '../style/App.css';
import MovieCard from './movieCard'
import { getStarWarsMovies } from '../api/movies';
import {
    AppBar,
    Toolbar,
    Typography,
    Grid
} from "@material-ui/core";

class movieCatalog extends React.Component {
    state = {
        movies: [],
        err: null
    }

    componentDidMount() {
        getStarWarsMovies()
            .then(moviesFromApi =>
                this.setState(() => {
                    return {
                        movies: moviesFromApi
                    }
                })
            ).catch()
    }


    render() {
        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">Star War Movies</Typography>
                    </Toolbar>
                </AppBar>
                <Grid container className="container">
                {this.state.movies.map(myMovie => {
                    return <MovieCard movie={myMovie} />
                })}
                </Grid>
            </>
        );
    }
}

export default movieCatalog;



