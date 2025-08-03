import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import video from '../assets/PozeKitty/videoClipDoamna.mp4';

export default function VideoCard({ src = video, title, description }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const animationFrameId = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const myConfetti = confetti.create(canvasRef.current, {
      resize: true,
      useWorker: true,
    });

    function shoot() {
      // Confetti galben/portocaliu, forme pătrate (ca în codul anterior)
      myConfetti({
        particleCount: 2,
        spread: 55,
        origin: { x: Math.random(), y: 0 },
        colors: ['#fbbf24', '#f59e0b', '#d97706', '#facc15'],
        shapes: ['square'],
        scalar: 0.7 + Math.random() * 0.3,
        gravity: 0.2,
        drift: (Math.random() - 0.5) * 0.3,
        ticks: 200,
      });

      // Confetti flori, rotunde și pastelate
      myConfetti({
        particleCount: 2,
        spread: 70,
        origin: { x: Math.random(), y: 0 },
        colors: ['#f7c6e7', '#fbc9ff', '#f0a6f7'],
        shapes: ['circle'],
        scalar: 0.4 + Math.random() * 0.4,
        gravity: 0.1,
        drift: (Math.random() - 0.5) * 0.2,
        ticks: 250,
      });
    }

    function frame() {
      shoot();
      animationFrameId.current = requestAnimationFrame(frame);
    }

    if (isPlaying) {
      animationFrameId.current = requestAnimationFrame(frame);
    } else {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    }

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [isPlaying]);

  const borderAnimation = {
    animate: {
      boxShadow: [
        '0 0 15px 5px rgba(250, 204, 21, 0.8)',
        '0 0 25px 8px rgba(250, 204, 21, 1)',
        '0 0 15px 5px rgba(250, 204, 21, 0.8)',
      ],
      borderColor: ['#facc15', '#fbbf24', '#facc15'],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    initial: {
      boxShadow: '0 0 8px 2px rgba(0,0,0,0.1)',
      borderColor: '#d1d5db',
    },
  };

  return (
    <motion.div
      onClick={togglePlay}
      className="max-w-md mx-auto bg-white rounded-xl overflow-hidden my-6 border-2 relative cursor-pointer shadow-lg"
      initial="initial"
      animate={isPlaying ? 'animate' : 'initial'}
      variants={borderAnimation}
      style={{ borderStyle: 'solid', borderWidth: '2px' }}
    >
      {/* Canvas confetti */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
          borderRadius: 'inherit',
          zIndex: 5,
        }}
      />

      <video
        ref={videoRef}
        src={src}
        className="w-full h-auto relative z-10"
        controls={false}
        style={{ backgroundColor: '#000' }}
      />
      <div className="p-4 relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-2xl font-bold text-gray-900 mb-2"
        >
          {title || 'Doamna Invatatoare multumim 💓💓💓💓'}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-700"
        >
          {description || 'Dumneavoastra ne-ati deschis aripiile!!'}
        </motion.p>
        <AnimatePresence>
          <motion.button
            key={isPlaying ? 'pause' : 'play'}
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="mt-4 px-4 py-2 bg-amber-400 hover:bg-blue-700 text-white rounded transition duration-300"
          >
            {isPlaying ? 'Pauza ⏸️' : 'Porneste ▶️'}
          </motion.button>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
