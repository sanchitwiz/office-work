import React from 'react';
import background from '../assets/carRental.jpg';

function HeroSection() {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="text-white max-w-2xl mx-auto px-4">
          <h1 className="text-6xl font-extrabold mb-6 tracking-wide leading-tight">
            Exclusive & Low Cost
          </h1>
          <p className="text-2xl font-light mb-10">
            Best rental cars at your location, available anytime
          </p>
          <button className="bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full hover:bg-yellow-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
