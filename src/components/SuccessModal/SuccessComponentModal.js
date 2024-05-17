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
          <Link to="/" className="modal-button" onClick={onClose}>Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}

export default SuccessModalComponent;
