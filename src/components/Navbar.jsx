import React from 'react';
import {  AiOutlineShoppingCart } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-[#131921] text-white px-4 py-2">
      <div className="max-w-[1500px] mx-auto flex items-center gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center p-2 border border-transparent hover:border-white cursor-pointer transition-all">
          <span className="text-2xl font-bold tracking-tight">rituraj<span className="text-[#febd69]">.amazon</span></span>
        </Link>

        {/* Deliver to */}
        <div className="hidden md:flex items-center p-2 border border-transparent hover:border-white cursor-pointer transition-all">
          <HiOutlineLocationMarker className="text-xl mt-2" />
          <div className="ml-1 flex flex-col">
            <span className="text-xs text-gray-300">Deliver to</span>
            <span className="text-sm font-bold">New York 10001</span>
          </div>
        </div>

        {/* Search Bar Component */}
        <div className="flex-1">
          <SearchBar />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-1 text-xs md:text-sm">
          {/* Account */}
          <div className="p-2 border border-transparent hover:border-white cursor-pointer transition-all flex flex-col">
            <span>Hello, sign in</span>
            <span className="font-bold flex items-center">Account & Lists</span>
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative p-2 border border-transparent hover:border-white cursor-pointer transition-all flex items-end">
            <div className="relative">
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[#f08804] font-bold text-base bg-[#131921] px-1">{cartCount}</span>
              <AiOutlineShoppingCart className="text-3xl" />
            </div>
            <span className="font-bold ml-1 hidden lg:inline">Cart</span>
          </Link>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-[#232f3e] -mx-4 px-6 py-1 text-sm font-medium flex items-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <Link to="/products" className="cursor-pointer hover:underline">All Products</Link>
        <Link to="/wishlist" className="cursor-pointer hover:underline">Wishlist</Link>
      </div>
    </nav>
  );
};

export default Navbar;