import React from 'react';
import '../style/movieCard.css'
import Button from '@material-ui/core/Button';

function MovieCard(props){ //Como passar props? // De onde vem essas props ?
    return(
        <div className = "card">
            <p>{props.movie.Title}</p>
            <img src={props.movie.Poster} alt="" /> 
            <Button variant="contained" color="primary">
                Saiba Mais
            </Button> 
        </div> 
        
    )}

export default MovieCard;
