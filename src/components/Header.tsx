
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <Link to="/" className="inline-block">
              <h1 className="font-playfair font-black text-2xl md:text-3xl tracking-tight">
                THE DAILY CHRONICLE
              </h1>
            </Link>
          </div>

          {/* Search Icon */}
          <div className="md:flex-1 text-right">
            <button className="p-2">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block py-4`}>
          <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8 font-sans uppercase text-sm tracking-wider">
            <li><Link to="/" className="hover:underline">Arts</Link></li>
            <li><Link to="/" className="hover:underline">Culture</Link></li>
            <li><Link to="/" className="hover:underline">Design</Link></li>
            <li><Link to="/" className="hover:underline">Politics</Link></li>
            <li><Link to="/" className="hover:underline">Science</Link></li>
            <li><Link to="/" className="hover:underline">Travel</Link></li>
            <li><Link to="/" className="hover:underline">Technology</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
