import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom'
export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        console.log(movie),
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;

  return (

        <MovieCard title={title} director={director} metascore={metascore} id={id}/>


    // <div className="movie-card">
    //   <h2>{title}</h2>
    //   <div className="movie-director">
    //     Director: <em>{director}</em>
    //   </div>
    //   <div className="movie-metascore">
    //     Metascore: <strong>{metascore}</strong>
    //   </div>
    // </div>
  );
}
