import { useState, useEffect } from 'react';
import { Player } from '@remotion/player';
import { movieData } from '../lib/remotion';

const MoviePreview = () => {
  const [composition, setComposition] = useState(null);

  useEffect(() => {
    const loadComposition = async () => {
      const comp = await movieData();
      setComposition(comp);
    };

    loadComposition();
  }, []);

  return (
    <div id="moviePreview" className="w-1/2 h-screen overflow-auto">
      {composition && (
        <Player
          composition={composition}
          autoPlay
          loop
          controls
        />
      )}
    </div>
  );
};

export default MoviePreview;