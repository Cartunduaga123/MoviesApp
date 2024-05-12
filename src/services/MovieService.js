import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY
const ApiTheMovieDB = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_TMDB,
    params: {
        api_key: API_KEY
    }
});


export const moviesAll = async () => {
    try {
        const response = await ApiTheMovieDB.get('discover/movie');
        return response.data.results;
    } catch (error) {
        return [];
    }
};

// export const movieDetails = async (movieId) => {
//     try {
//         const response = await ApiTheMovieDB.get(movie/${movieId});
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching movie details:', error);
//         return null;
//     }
// };

// export const genres = async () => {
//     try {
//         const response = await axios.get(${process.env.BASE_URL_TMDB}genre/movie/list, {
//             params: {
//                 api_key: API_KEY // Reemplaza 'tu_api_key' con tu clave de API
//             }
//         });
//         return response.data.genres;
//     } catch (error) {
//         console.error('Error fetching genres:', error);
//         return []; // Devuelve un array vacío en caso de error
//     }
// };