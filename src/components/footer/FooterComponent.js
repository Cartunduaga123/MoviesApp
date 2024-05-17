import React from 'react';
import './FooterComponent.css';

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Cineflix. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/privacy-policy">Política de Privacidad</a>
          <a href="/terms-of-service">Términos del Servicio</a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
