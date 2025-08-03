import React, { useState, useRef } from 'react';
import muzica from '../assets/PozeKitty/LaMultiAniMuzica.mp3'
export default function MusicPlayerLocal() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
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

      {/* Player audio invizibil (fără controale vizibile) */}
      <audio
        ref={audioRef}
        src={muzica} // calea către fișierul tău mp3 din folderul public
        loop
        style={{ display: 'none' }}
      />
    </div>
  );
}
