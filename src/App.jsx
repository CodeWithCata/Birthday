
import './index.css';
import Title from './components/Title';
import CardContainer from './components/CardContainer';
import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import YouTubeMusic from './components/YoutubeMusic.jsx';
import YoutubeMusicManual from './components/YoutubeMusicManual.jsx';
import VideoCard from './components/VideoCard.jsx';

 function ConfettiOnLoad() {
  useEffect(() => {
    // Launch confetti burst from the top
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { x: 0.5, y: 0 },  // x=0.5 center horizontally, y=0 top of screen
      angle: 90,                 // shoot confetti downward (90 degrees)
      gravity: 1.2,
      scalar: 1.2,
      colors: ["#3b82f6", "#60a5fa", "#2563eb", "#93c5fd"], // blues
    });
  }, []);

  return null; // no visible UI, just trigger confetti once
}
function App() {
  return (

    <>
    <YoutubeMusicManual />
    <YouTubeMusic />
        <ConfettiOnLoad></ConfettiOnLoad>
<Title></Title>
  <CardContainer></CardContainer>    
 <VideoCard></VideoCard>
    </>
    
  );
}

export default App;
