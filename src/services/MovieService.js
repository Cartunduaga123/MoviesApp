import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY
const ApiTheMovieDB = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_TMDB,
    params: {
        api_key: API_KEY
    }
});


export const moviesAll = async (page) => {
    try {
        const response = await ApiTheMovieDB.get('discover/movie', {
            params: {
                page: page
            }
        });
        console.log('estructura',response);
        return response.data.results;
    } catch (error) {
        return [];
    }
};

export const getMovieById = async (id) => {
    try {
        const response = await ApiTheMovieDB.get(`movie/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los detalles de la película:', error);
        throw error;
    }
};

export const getCast= async (id) => {
    try {
        const response = await ApiTheMovieDB.get(`movie/${id}/credits?language=en-US`);
        console.log('getCast', response.data.cast)
        return response.data;
    } catch (error) {
        console.error('Error al obtener el Cast', error);
        throw error;
    }
};


export async function searchMovies(query, page) {
    try {
      const response = await ApiTheMovieDB.get('/search/movie', {
        params: {
          query,
          page
        }
      });
  
      return response.data.results;
    } catch (error) {
      throw new Error(`Error buscando peliculas ${error.message}`);
    }
  }

