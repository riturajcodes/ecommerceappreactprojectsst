import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-10">
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full py-4 bg-[#37475a] text-white hover:bg-[#485769] transition-all text-sm font-bold"
      >
        Back to top
      </button>

      <div className="bg-[#232f3e] text-white py-10 px-4">
        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-3">Get to Know Us</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              <Link to="/" className="hover:underline cursor-pointer block">Home</Link>
              <Link to="/products" className="hover:underline cursor-pointer block">Products</Link>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Shop with Us</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              <Link to="/cart" className="hover:underline cursor-pointer block">Your Cart</Link>
              <Link to="/wishlist" className="hover:underline cursor-pointer block">Your Wishlist</Link>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 text-xs text-gray-400">
          &copy; {new Date().getFullYear()}, Amazon Clone Project, Built with React
        </div>
      </div>
    </footer>
  );
};

export default Footer;