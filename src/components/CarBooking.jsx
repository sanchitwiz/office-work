import React from 'react';
import CarCard from './Cards/CarCards';
import car1 from '../assets/car1.jpg';

const CarBooking = () => {
  const cars = [
    { id: 1, model: 'Audi A6', price: '$80/day', shortDetails: 'Luxury sedan', details: 'Audi A6 is a luxury sedan with a powerful engine and premium features.', image: car1 },
    { id: 2, model: 'BMW 5 Series', price: '$90/day', shortDetails: 'Comfort & Style', details: 'BMW 5 Series offers a comfortable and stylish ride with advanced technology.', image: car1 },
    { id: 3, model: 'Mercedes E-Class', price: '$100/day', shortDetails: 'Elegance & Performance', details: 'Mercedes E-Class combines elegance with performance and cutting-edge safety features.', image: car1 },
    { id: 4, model: 'Tesla Model S', price: '$120/day', shortDetails: 'Electric & Fast', details: 'Tesla Model S is an all-electric luxury sedan with exceptional speed and technology.', image: car1 },
    { id: 5, model: 'Porsche 911', price: '$150/day', shortDetails: 'Sporty & Stylish', details: 'Porsche 911 is a classic sports car with a powerful engine and sleek design.', image: car1 },
    { id: 6, model: 'Lamborghini Huracan', price: '$200/day', shortDetails: 'Exotic & Powerful', details: 'Lamborghini Huracan offers an exotic design with an extremely powerful engine.', image: car1 }
  ];

  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-20 px-6 md:px-16 lg:px-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 drop-shadow-sm">
        Car Rental Service
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
        Experience luxury and comfort with our premium car rental service. Choose from a wide range of luxury cars at the best prices.
      </p>
      <div className="relative">
        <div className="absolute inset-0 transform -skew-y-3 bg-gray-200 opacity-30 rounded-lg shadow-lg"></div>
        <div className="relative">
          <div className="w-full p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-14">
              {cars.map(car => (
                <CarCard
                  key={car.id}
                  car={car}
                  className="bg-white rounded-lg shadow-md p-6"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBooking;
