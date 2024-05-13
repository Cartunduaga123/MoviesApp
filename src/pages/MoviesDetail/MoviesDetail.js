import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importa useParams para obtener el parámetro de la ruta
import { getMovieById } from '../../services/MovieService';
import './MoviesDetail.css';

function MovieDetailPage() {
  const { id } = useParams(); // Obtiene el parámetro ID de la ruta
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // Obtener detalles de la película por ID
        const movieData = await getMovieById(id);
        setMovie(movieData);
      } catch (error) {
        console.error('Error al obtener detalles de la película:', error);
      }
    };

    fetchMovie();
  }, [id]); // Vuelve a cargar los detalles de la película cuando cambia el ID

  return (
    <div className="movie-detail-container">
      {movie && (
        <>
          <div className="movie-detail-header">
            <img src={`${process.env.REACT_APP_BASE_URL_TMDB_IMG}${movie.poster_path}`} className="movie-detail-poster" />
            <div className="movie-detail-info">
              <h1 className="movie-detail-title">{movie.title}</h1>
              <p className="movie-detail-rating">Puntuación: {movie.vote_average}</p>
              <p className="movie-detail-votes">Votos: {movie.vote_count}</p>
              <p className="movie-detail-popularity">Popularidad: {movie.popularity}</p>
              <p className="movie-detail-release-date">Fecha de Lanzamiento: {movie.release_date}</p>
              <p className="movie-detail-adult">Adulto: {movie.adult ? 'Sí' : 'No'}</p>
            </div>
          </div>
          <div className="movie-detail-overview">
            <h2>Resumen</h2>
            <p>{movie.overview}</p>
          </div>
        
        </>
      )}
    </div>
  );
}

export default MovieDetailPage;