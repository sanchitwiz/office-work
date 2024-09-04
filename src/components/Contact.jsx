import React from 'react';

function ContactForm() {
  return (
    <div className="bg-white p-6 shadow-md max-w-md mx-auto mt-8 rounded-lg transform transition-all hover:shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Get in Touch</h2>
      <form>
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-700 mb-1">Email ID</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-700 mb-1">Mobile No</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Your Mobile Number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-700 mb-1">Description</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Write your message here"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
