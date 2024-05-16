import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';

import './App.css';
import HeaderComponent from './components/Header/Header';
import MovieListPage from './pages/MoviesListPage/MovieListPage';
import MovieDetailPage from './pages/MoviesDetail/MoviesDetail';
import MovieTrailerPage from './pages/MoviesTrailer/MovieTrailerPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className="background-color"></div>
        <HeaderComponent />
        <Content />
      </div>
    </Router>
  );
}

function Content() {
  const location = useLocation();

  return (
    <div className="content" style={{ paddingTop: '100px' }}> {/* Asegura que el contenido no quede oculto detrás del encabezado */}
      <Routes location={location}>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/trailer" element={<MovieTrailerPage />} />
      </Routes>
    </div>
  );
}

export default App;
