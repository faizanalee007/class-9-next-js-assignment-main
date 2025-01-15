import React from "react";

const Navbar = () => {
  return (
    <nav className="flex h-20 w-full bg-indigo-600 justify-between items-center px-4 md:px-10">
      {/* Logo */}
      <div className="w-24 h-8 bg-black rounded-md md:w-32 md:h-10"></div>
      {/* Subtitle */}
      <div className="hidden md:block w-32 h-8 bg-gray-700 rounded-md"></div>

      {/* Navigation Links */}
      <ul className="flex space-x-4 md:space-x-6">
        <li className="px-3 py-2 bg-emerald-700 text-white rounded-lg text-sm md:text-base hover:bg-emerald-800 cursor-pointer transition-all">
          Home
        </li>
        <li className="px-3 py-2 bg-lime-700 text-white rounded-lg text-sm md:text-base hover:bg-lime-800 cursor-pointer transition-all">
          About
        </li>
        <li className="px-3 py-2 bg-pink-600 text-white rounded-lg text-sm md:text-base hover:bg-pink-700 cursor-pointer transition-all">
          Services
        </li>
        <li className="px-3 py-2 bg-fuchsia-800 text-white rounded-lg text-sm md:text-base hover:bg-fuchsia-900 cursor-pointer transition-all">
          Portfolio
        </li>
        <li className="px-3 py-2 bg-cyan-500 text-white rounded-lg text-sm md:text-base hover:bg-cyan-600 cursor-pointer transition-all">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
