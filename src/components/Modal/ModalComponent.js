import React from 'react';
import './ModalComponent.css';
import { Link } from 'react-router-dom';

function ModalComponent({ isOpen, onClose, movie }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img src={`${process.env.REACT_APP_BASE_URL_TMDB_IMG}${movie.poster_path}`} alt={movie.title} className="modal-poster" />
        <h2 className="modal-title">{movie.title}</h2>
        <Link to={`/rent/${movie.id}`} className="modal-rent-button">Rentar Película</Link>
      </div>
    </div>
  );
}

export default ModalComponent;