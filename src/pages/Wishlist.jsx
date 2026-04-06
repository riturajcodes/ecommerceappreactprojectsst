import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import { useWishlist } from '../hooks/useWishlist';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-[1500px] mx-auto p-4 sm:p-6">
        <div className="bg-white p-6 shadow-sm rounded-md min-h-[400px]">
          <h1 className="text-2xl font-bold mb-6 border-b pb-4">Your Wishlist</h1>
          
          {wishlist.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-gray-500 text-lg mb-4">Your wishlist is currently empty.</p>
              <Link 
                to="/products" 
                className="text-[#007185] hover:underline font-medium"
              >
                Continue shopping to add items to your wishlist
              </Link>
            </div>
          ) : (
            <ProductGrid products={wishlist} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;