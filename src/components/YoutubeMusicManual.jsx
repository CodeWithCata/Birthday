import React, { useState, useRef } from 'react';
import YouTube from 'react-youtube';

export default function YouTubeMusicManual() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 0,
      controls: 0,
      mute: 0,
      loop: 1,
      playlist: "vInpqeDRlio",
    },
  };

  const onReady = (event) => {
    playerRef.current = event.target;
  };

  const togglePlay = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={togglePlay}
        className="px-6 py-2 bg-violet-700 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-300"
      >
        {isPlaying ? 'Pune pauza ▶️' : 'Apasa 🎵'} 
      </button>

      {/* Hidden YouTube Player */}
      <YouTube
        videoId="vInpqeDRlio"
        opts={opts}
        onReady={onReady}
        style={{ display: 'none' }}
      />
    </div>
  );
}
