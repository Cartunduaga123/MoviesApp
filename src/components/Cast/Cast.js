import React from 'react';
import defaultProfileImage from '../../assets/images/NotFound.svg';
import './Cast.css';

function CastCarousel({ cast }) {
  return (
    <div className="movie-detail__carousel">
      {cast.map(actor => (
        <div key={actor.id} className="movie-detail__cast-card">
          <img
            src={actor.profile_path ? `${process.env.REACT_APP_BASE_URL_TMDB_IMG}${actor.profile_path}` : defaultProfileImage}
            alt={actor.name}
            className="movie-detail__cast-card-image"
          />
          <p className="movie-detail__cast-card-name">{actor.name}</p>
          <p className="movie-detail__character">{actor.character}</p>
        </div>
      ))}
    </div>
  );
}

export default CastCarousel;