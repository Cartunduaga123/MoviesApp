import React from 'react';

import './Player.css';

function PlayerTrailerComponent({videoId}) {

  return (
    <div className="movie-trailer">
      <div className="iframe-container">
        <iframe 
          className="iframe-video"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&controls=1&fs=1&rel=0`} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default PlayerTrailerComponent;