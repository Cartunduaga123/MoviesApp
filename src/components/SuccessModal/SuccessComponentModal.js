import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessModalComponent.css'; // Importa el archivo de estilos

function SuccessModalComponent({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <h2 className="modal-title">¡Película rentada exitosamente!</h2>
          <p className="modal-message">¡Disfruta de tu película!</p>
          <div className="modal-buttons__box">
            <Link to="/" className="modal-button__back-home" onClick={onClose}>Volver al inicio</Link>
            <Link to={`/watch-movie`}className="modal-button__view-movie" onClick={onClose}>Ver Pelicula</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessModalComponent;
