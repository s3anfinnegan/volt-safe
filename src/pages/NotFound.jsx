import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4 text-center">
      <div className="max-w-md">
        {/* A fun icon or illustration could go here */}
        <div className="text-[#059669] text-6xl font-bold mb-4">404</div>
        
        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">
          I think you've got your wires crossed.
        </h1>
        
        <p className="text-slate-600 mb-8 text-lg">
          The page you're looking for does not exist or has been moved. 
          Let's get you back on the right track.
        </p>
        
        <Link 
          to="/" 
          className="bg-[#1e293b] hover:bg-[#059669] text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;