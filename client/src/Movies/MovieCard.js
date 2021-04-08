import React from 'react';
import { Link, useHistory } from 'react-router-dom'

export default function MovieCard (props) {
  const { title, director, metascore, id } = props

  return(
    <Link to={`movies/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
      <div className="movie-card" onClick={() => console.log(`Clicked Movie Card #${id}!`)}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </Link>
  )
}