import React from 'react';
import poza from '../assets/PozeKitty/ExcursieMunte.jpg'
import { image } from 'framer-motion/client';


function ImageCard({ imageSrc=poza, title, description }) {
  return (
    <div className="mb-100 max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <div className="p-6 bg-blue-300">
        <h2 className="text-2xl font-serif font-semibold text-zinc-950 mb-2">{description}</h2>
        
      </div>
    </div>
  );
}

export default ImageCard;
