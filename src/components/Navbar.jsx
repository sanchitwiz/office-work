import React from 'react';

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <span className="text-yellow-500">INDIAN</span> Car Rental
      </div>
      <div className="space-x-4">
        <a href="/" className="hover:text-yellow-500">Home</a>
        <a href="/cars" className="hover:text-yellow-500">Cars</a>
        <a href="/vans" className="hover:text-yellow-500">Vans</a>
        <a href="/buses" className="hover:text-yellow-500">Buses</a>
        <a href="/contact" className="hover:text-yellow-500">Contact Us</a>
      </div>
    </nav>
  );
}

export default Navbar;
