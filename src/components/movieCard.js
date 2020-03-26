import React from 'react';

function MovieCard(props){ //Como passar props? // De onde vem essas props ?
    return(
        <div>
            <img src={props.movie.Poster} alt="" />
            <p>{props.movie.Title}</p>
        </div>
    )}

export default MovieCard;
