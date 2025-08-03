import React from "react";
import { motion } from "framer-motion";
import GraphemeSplitter from "grapheme-splitter";

const titleText = "🎉 La mulți ani, doamnă învățătoare! 🎉";
const splitter = new GraphemeSplitter();
const letters = splitter.splitGraphemes(titleText);

const letterVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  }),
};

function Title() {
  return (
    <div className="mb-20 relative mt-20 text-center px-4 overflow-hidden">
      {/* Sparkle Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full animate-sparkle bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_70%)]" />
      </div>

      {/* Title Text */}
      <motion.h1
        className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg"
        style={{
          background: "linear-gradient(90deg, #ffffff, #93c5fd, #3b82f6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "pulseGlow 4s ease-in-out infinite",
          whiteSpace: "pre-wrap",
          lineHeight: "1.2",
        }}
        initial="hidden"
        animate="visible"
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            custom={index}
            className="inline-block"
            style={{
              marginRight: char === " " ? "0.25rem" : "0",
              fontSize: char === "🎉" ? "1em" : undefined,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Custom Styles */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% {
            text-shadow: 0 0 10px #fff, 0 0 20px #60a5fa;
          }
          50% {
            text-shadow: 0 0 20px #fff, 0 0 40px #3b82f6;
          }
        }

        @keyframes sparkle {
          0%, 100% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
        }

        .animate-sparkle {
          animation: sparkle 10s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
}

export default Title;
