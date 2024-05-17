import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';

import './App.css';
import HeaderComponent from './components/Header/Header';
import MovieListPage from './pages/MoviesListPage/MovieListPage';
import MovieDetailPage from './pages/MoviesDetail/MoviesDetail';
import MovieTrailerPage from './pages/MoviesTrailer/MovieTrailerPage';
import RentMoviePage from './pages/RentMoviePage/RentMoviePage';
import MovieWatchPage from './pages/MoviesWatchPage/MoviesWatchPage';
import AboutPage from './pages/About/About';


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
    <div className="content" style={{ paddingTop: '100px' }}> 
      <Routes location={location}>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/trailer" element={<MovieTrailerPage />} />
        <Route path="/rent/:id" element={<RentMoviePage />} />
        <Route path="/watch-movie" element={<MovieWatchPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
