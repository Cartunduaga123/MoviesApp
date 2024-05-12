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
    <h1>Hola</h1>
  );
}

export default MovieListPage;