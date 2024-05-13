// MovieListPage.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { moviesAll } from '../../services/MovieService';
import Spinner from '../../components/Spinner/spinner';
import Star from '../../components/star/star';
import './MoviesListPage.css';

function MovieListPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mostrar el indicador de carga
        setLoading(true);

        // Obtener lista de películas de la página actual
        const moviesData = await moviesAll(currentPage);

        // Concatenar las nuevas películas con las anteriores
        setMovies(prevMovies => [...prevMovies, ...moviesData]);

        // Ocultar el indicador de carga después de cargar las películas
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar las películas:', error);
        setLoading(false); // Asegúrate de ocultar el indicador de carga en caso de error
      }
    };

    fetchData();
  }, [currentPage]);

  const loadMoreMovies = () => {
    // Incrementar la página actual
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className="peliculas-container">
      <div className="movies-container">
        {movies.map((movie, index) => (
          <div key={`${movie.id}-${index}`} className="movie-card">
            <Link to={`/movie/${movie.id}`} className="movie-link"> {/* Enlace al detalle de la película */}
              <img className="movie-poster"
                src={`${process.env.REACT_APP_BASE_URL_TMDB_IMG}${movie.poster_path}`}
                alt={movie.title} />
              <div className="movie-overlay">
                <div className="movie-rating">
                  {[...Array(Math.floor(movie.vote_average / 2))].map((_, index) => (
                    <Star key={index} filled />
                  ))}
                  {movie.vote_average % 2 !== 0 && <Star filled={false} />}
                </div>
                <p className="movie-votes">{movie.vote_count} Votos</p>
                <p className="movie-popularity">Popularidad: {movie.popularity}</p>
              </div>
              <div className="movie-details">
                <h2>{movie.title}</h2>
                <p>Adulto: {movie.adult ? 'Sí' : 'No'}</p>
                <p>Fecha de Lanzamiento: {movie.release_date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {loading && (
        <div className="loading-overlay">
          <Spinner />
          <p>Cargando películas...</p>
        </div>
      )}
      <button className="load-more-button" onClick={loadMoreMovies}>Cargar Más Películas</button>
    </div>
  );
}

export default MovieListPage;
