import React from 'react';
import PlayerTrailerComponent from '../../components/Player/Player';


function MovieWatchPage() {
  const videoId = "3xk11d9hjp0";

  return (
    <PlayerTrailerComponent videoId={videoId} />
  );
}

export default MovieWatchPage;