import React, { useState } from 'react';

const CarCard = ({ car }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-80 h-96 perspective mx-4 my-4 group">
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front of the Card */}
        <div className="absolute w-full h-full bg-white shadow-md rounded-lg flex flex-col justify-center items-center backface-hidden p-6 border border-gray-300 group-hover:shadow-lg transition-shadow duration-300">
          <img src={car.image} alt={car.model} className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-xl font-semibold mt-6 text-gray-700">{car.model}</h2>
          <p className="text-gray-600 text-lg mt-2">{car.price}</p>
          <p className="text-sm mt-4 text-gray-500">{car.shortDetails}</p>
          <button 
            onClick={handleFlip} 
            className="mt-auto px-5 py-1 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            aria-label="View Details"
          >
            View Details
          </button>
        </div>
        
        {/* Back of the Card */}
        <div className="absolute w-full h-full bg-gray-50 shadow-md rounded-lg flex flex-col justify-center items-center backface-hidden p-6 transform rotate-y-180 border border-gray-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">{car.model} Details</h2>
          <p className="text-center text-gray-600">{car.details}</p>
          <button 
            onClick={handleFlip} 
            className="mt-auto px-5 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            aria-label="Back"
          >
            Back
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default CarCard;
