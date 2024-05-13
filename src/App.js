import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/Header/Header';
import MovieListPage from './pages/MoviesListPage/MovieListPage';
import MovieDetailPage from './pages/MoviesDetail/MoviesDetail';

function App() {
  return (
    <Router>
      <div className='App'>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<MovieListPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          {/* <Route path="/peliculas" component={Peliculas} />
          <Route path="/series" component={Series} />
          <Route path="/acerca-de" component={AcercaDe} />
          <Route path="/contacto" component={Contacto} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
