import React from 'react';
import PlayerTrailerComponent from '../../components/Player/Player';


function MovieTrailerPage() {
  const videoId = "3xk11d9hjp0";

  return (
    <PlayerTrailerComponent videoId={videoId} />
  );
}

export default MovieTrailerPage;