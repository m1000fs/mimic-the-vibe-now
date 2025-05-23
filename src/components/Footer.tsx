
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-playfair text-xl mb-4">WECODE</h4>
            <p className="text-gray-400 text-sm">
              Exploring the intersections of culture, politics, and ideas through thoughtful journalism.
            </p>
          </div>
          <div>
            <h5 className="text-sm uppercase font-sans font-bold mb-4">Sections</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/section/ai-in-culture" className="hover:text-white transition-colors">AI in Culture</Link></li>
              <li><Link to="/section/industry-companies" className="hover:text-white transition-colors">Industry & Companies</Link></li>
              <li><Link to="/section/research-breakthroughs" className="hover:text-white transition-colors">Research & Breakthroughs</Link></li>
              <li><Link to="/section/policy-ethics" className="hover:text-white transition-colors">Policy & Ethics</Link></li>
              <li><Link to="/section/people-power" className="hover:text-white transition-colors">People & Power</Link></li>
              <li><Link to="/section/tools-apis" className="hover:text-white transition-colors">Tools & APIs</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm uppercase font-sans font-bold mb-4">Information</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Advertise</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm uppercase font-sans font-bold mb-4">Subscribe</h5>
            <form className="mt-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 px-3 py-2 w-full text-sm mb-2" 
              />
              <button className="bg-white text-black px-4 py-2 text-sm font-sans uppercase w-full hover:bg-gray-200 transition-colors">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} The Daily Chronicle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
