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

// export const obtenerListadoPeliculas = () => {
//     const [peliculas, setPeliculas] = useState([]);

//     useEffect(() => {
//         const API_KEY = process.env.REACT_APP_API_KEY
//         const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es&page=1`;

//         fetch(URL)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data.results); // Muestra los resultados en la consola para verificar que estén llegando correctamente
//                 setPeliculas(data.results);
//             })
//             .catch(error => console.error('Error al obtener el listado de películas:', error));
//     }, []);
// };

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