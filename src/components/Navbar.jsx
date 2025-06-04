import { useState } from 'react';
import shippingPlanes from '../assets/images/shippingPlanes.jpg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">

        {/* Logo + Nom */}
        <a href="#" className="flex items-center space-x-3">
          <img src={shippingPlanes} alt="Logo Ter Maximum" className="h-10 w-10 object-contain" />
          <span className="text-lg font-bold tracking-wide">Ter Maximum Ltd</span>
        </a>

        {/* Menu pour grand écran */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Bouton menu hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium bg-blue-900">
          <a href="#" className="block hover:underline">Home</a>
          <a href="#about" className="block hover:underline">About</a>
          <a href="#services" className="block hover:underline">Services</a>
          <a href="#contact" className="block hover:underline">Contact</a>
        </div>
      )}
    </nav>
  );
}
