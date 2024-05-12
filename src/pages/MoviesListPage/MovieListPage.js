import React, { useState, useEffect } from 'react';
import { moviesAll } from '../../services/MovieService';

function MovieListPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Obtener lista de películas
      const moviesData = await moviesAll();
      console.log(moviesData)
      setMovies(moviesData);
    };

    fetchData();
  }, []);

  return (
    <div className="m-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map(movie => (
        //   <MovieCard key={movie.id} movie={movie} genres={genres}/>
        <p key={movie.id}>{movie.title}</p>
        ))}
      </div>
    </div>
  );
}

export default MovieListPage;