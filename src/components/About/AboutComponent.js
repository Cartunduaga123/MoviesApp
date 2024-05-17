import React from 'react';
import './AboutComponent.css';

function AboutComponent() {
  return (
    <div className="about-container">
      <h1 className="about-heading">¡Bienvenido a Cineflix!</h1>
      <p className="about-description">
        En <span className="about-highlight">Cineflix</span>, nos apasiona el cine y queremos brindarte la mejor experiencia posible.
      </p>
      <p className="about-description">
        Nuestra plataforma te ofrece una amplia selección de películas de diferentes géneros y épocas, para que puedas disfrutar en cualquier momento y lugar.
      </p>
      <p className="about-description">
        ¡Explora nuestro catálogo y sumérgete en el mundo del cine con <span className="about-highlight">Cineflix</span>!
      </p>
    </div>
  );
}

export default AboutComponent;
