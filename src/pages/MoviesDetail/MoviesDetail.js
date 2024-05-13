import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../services/MovieService';
import Spinner from '../../components/Spinner/spinner';
import Star from '../../components/star/star';
import './MoviesDetail.css';


function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await getMovieById(id);
      setMovie(movieData);
      setLoading(false);
    };

    fetchMovie();
  }, [id]);



  return (
    <div className="movie-detail">
      {loading ? ( // Si loading es true, mostramos el Spinner
        <Spinner />
      ) : (
        <>
          <div className="movie-detail__header">
            <img className={`movie-detail__poster ${loading ? '' : 'loaded'}`}
              src={`${process.env.REACT_APP_BASE_URL_TMDB_IMG}${movie.backdrop_path}`}
              alt={movie.title} />
            <div className="movie-detail__info">
              <h2 className="movie-detail__title">{movie.title}</h2>
              <p className="movie-detail__release-date">
                {movie.release_date}
              </p>
              <p className="movie-detail__overview">{movie.overview}</p>
              <p className="movie-detail__popularity">Popularidad: {movie.popularity}</p>
              <div className="movie-detail__rating">
              <div className="movie-detail__vote_average">
                  {[...Array(Math.floor(movie.vote_average / 2))].map((_, index) => (
                    <Star key={index} filled />
                  ))}
                  {movie.vote_average % 2 !== 0 && <Star filled={false} />}
                </div>
                <p className="movie-detail__rating-label"></p>
              </div>
              <button className="movie-detail__watch-button">Ver película</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetailPage;
