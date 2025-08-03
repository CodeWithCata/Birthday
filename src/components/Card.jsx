import React from 'react';

function Card() {
  return (
    <div className="px-4 py-10 md:py-20">
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl max-w-3xl ml-20 p-6 sm:p-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold  text-white mb-6 relative inline-block shine">
          Felicitări, Doamna Învățătoare!
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 leading-relaxed font-medium">
          Vă mulțumim pentru toată răbdarea, bunătatea și iubirea cu care ne
          îndrumați! Ați lăsat o amprentă frumoasă în inimile noastre.
        </p>
        <p className="italic text-white font-semibold text-sm sm:text-base">
          Cu drag, elevii dvs. 🌟
        </p>
      </div>
    </div>
  );
}

export default Card;
