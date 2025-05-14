
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const categories = [
    { name: 'Arts', path: '/section/arts' },
    { name: 'Culture', path: '/section/culture' },
    { name: 'Design', path: '/section/design' },
    { name: 'Politics', path: '/section/politics' },
    { name: 'Science', path: '/section/science' },
    { name: 'Travel', path: '/section/travel' },
    { name: 'Technology', path: '/section/technology' }
  ];

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
                WeCode Insight
              </h1>
            </Link>
          </div>

          {/* Search Icon */}
          <div className="md:flex-1 text-right">
            <button className="p-2" onClick={toggleSearch}>
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200 animate-fade-in">
            <div className="relative max-w-xl mx-auto">
              <input 
                type="search" 
                placeholder="Search articles..." 
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block py-4`}>
          <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8 font-sans uppercase text-sm tracking-wider">
            {categories.map((category, index) => (
              <li key={index}><Link to={category.path} className="hover:underline">{category.name}</Link></li>
            ))}
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
