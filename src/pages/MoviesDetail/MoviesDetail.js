import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { getMovieById, getCast } from '../../services/MovieService';

import Spinner from '../../components/Spinner/spinner';
import CastCarousel from '../../components/Cast/Cast';
import Star from '../../components/star/star';


import './MoviesDetail.css';

function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);

        // Obtener los detalles de la película
        const movieData = await getMovieById(id);
        console.log(movieData);
        setMovie(movieData);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    const fetchCast = async () => {
      try {
        // Obtener el elenco de la película
        const castData = await getCast(id);
        console.log('cast', castData);
        setCast(castData.cast); // Aquí accedemos a cast desde el objeto recibido
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    fetchMovieDetails();
    fetchCast();
  }, [id]);


  return (
    <div className="movie-detail">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="movie-detail__header">
            <img className={`movie-detail__poster ${loading ? '' : 'loaded'}`}
              src={`${process.env.REACT_APP_BASE_URL_TMDB_IMG}${movie?.backdrop_path}`}
              alt={movie?.title} />
            <div className="movie-detail__info">
              <h2 className="movie-detail__title">{movie?.title}</h2>
              <p className="movie-detail__release-date">
                {movie?.release_date}
              </p>
              <p className="movie-detail__overview">{movie?.overview}</p>
              <p className="movie-detail__popularity">Popularidad: {movie?.popularity}</p>
              <div className="movie-detail__rating">
                <div className="movie-detail__vote_average">
                  {[...Array(Math.floor(movie?.vote_average / 2))].map((_, index) => (
                    <Star key={index} filled />
                  ))}
                  {movie?.vote_average % 2 !== 0 && <Star filled={false} />}
                </div>
                <p className="movie-detail__rating-label"></p>
              </div>
              <Link to={`/trailer`} className="movie-detail__watch-button">Ver Trailer</Link>
            </div>
          </div>
          <div className="movie-detail__cast">
            <h3>Elenco:</h3>
            <CastCarousel cast={cast} /> 
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetailPage;
