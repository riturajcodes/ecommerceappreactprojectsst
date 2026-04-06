import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useCart } from '../hooks/useCart'
import { useWishlist } from '../hooks/useWishlist'
import { AiFillStar } from 'react-icons/ai'
import { getProductById } from '../services/api'

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { toggleWishlist } = useWishlist();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product details:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-[1500px] mx-auto p-4 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex items-center justify-center border p-4 rounded">
            <img src={product.image} alt={product.title} className="max-h-[500px] object-contain" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-medium mb-2">{product.title}</h1>
            <div className="flex items-center text-[#007185] hover:text-[#c45500] cursor-pointer mb-4">
              <div className="flex text-[#ffa41c] mr-2">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} className={i < Math.round(product.rating.rate) ? "text-[#ffa41c]" : "text-gray-300"} />
                ))}
              </div>
              <span className="text-sm">{product.rating.count} ratings</span>
            </div>
            
            <hr className="mb-4" />
            
            <div className="mb-4">
              <span className="text-xs align-top mt-1">$</span>
              <span className="text-2xl font-semibold">{product.price}</span>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-1">About this item:</h3>
              <p className="text-sm text-gray-800 leading-relaxed">{product.description}</p>
            </div>

            <div className="flex flex-col gap-3 max-w-xs">
              <button 
                onClick={() => addToCart(product)}
                className="w-full py-2 bg-[#ffd814] hover:bg-[#f7ca00] rounded-full font-medium border border-[#fcd200]"
              >
                Add to Cart
              </button>
              <button 
                onClick={() => toggleWishlist(product)}
                className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-medium border"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProductDetails