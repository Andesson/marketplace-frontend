import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#201192] text-white p-5 z-1000">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold mb-4 md:mb-0">Meu Site</div>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <Link
            to="/login"
            className="bg-[#593ec5] text-white px-6 py-2 rounded text-center hover:bg-[#7654de] transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-[#593ec5] text-white px-6 py-2 rounded text-center hover:bg-[#7654de] transition-colors"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;