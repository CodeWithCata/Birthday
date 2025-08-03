import React from 'react';
import YouTube from 'react-youtube';

function YouTubeMusic() {
  const videoId = "vInpqeDRlio";

  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: 1,
      loop: 1,
      playlist: videoId,
    },
  };

  const onError = (event) => {
    console.warn('YouTube player error or blocked:', event.data);
    alert('Music player is blocked or failed to load. Please disable ad blockers or try another browser.');
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onError={onError}
    />
  );
}

export default YouTubeMusic;
