import React from 'react'
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { useWishlist } from '../hooks/useWishlist'

const ProductCard = ({ product }) => {
  const { addToCart, cart, updateQuantity, removeFromCart } = useCart();
  const { toggleWishlist, wishlist } = useWishlist();
  if (!product) return null;

  const isWishlisted = wishlist.some(item => item.id === product.id);
  const cartItem = cart.find(item => item.id === product.id);

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative flex flex-col bg-white p-4 h-full cursor-pointer group"
    >
      <div 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleWishlist(product);
        }}
        className={`absolute top-2 right-2 p-1 rounded-full bg-white shadow-sm transition-opacity ${isWishlisted ? 'opacity-100 text-red-500' : 'opacity-0 group-hover:opacity-100 text-gray-500'}`}
      >
        {isWishlisted ? <AiFillHeart className="text-xl" /> : <AiOutlineHeart className="text-xl hover:text-red-500" />}
      </div>
      
      <Link to={`/products/${product.id}`}>
      <div className="h-40 flex items-center justify-center mb-2">
        <img src={product.image || product.thumbnail} alt={product.title} className="max-h-full max-w-full object-contain" />
      </div>

      <h4 className="text-sm font-medium line-clamp-2 mb-1 hover:text-orange-500 transition-colors">
        {product.title}
      </h4>

      <div className="flex items-center text-[#ffa41c] text-sm mb-1">
        <AiFillStar />
        <span className="text-gray-500 ml-1">({product.rating?.rate || product.rating || "4.5"})</span>
      </div>
      </Link>

      <div className="mt-auto">
        <div className="flex items-baseline gap-1">
          <span className="text-xs self-start mt-1">$</span>
          <span className="text-xl font-bold">{Math.floor(product.price)}</span>
          <span className="text-xs">{((product.price % 1) * 100).toFixed(0).substring(0, 2).padStart(2, '0')}</span>
        </div>
        <p className="text-xs text-green-600">Get it by Tomorrow</p>
        {cartItem ? (
          <div className="flex items-center justify-between mt-2 py-1 bg-gray-100 rounded-full border border-gray-300 overflow-hidden">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                if (cartItem.quantity === 1) {
                  removeFromCart(product.id);
                } else {
                  updateQuantity(product.id, -1);
                }
              }}
              className="px-4 py-1 hover:bg-gray-200 transition-colors font-bold text-gray-700"
            >
              -
            </button>
            <span className="font-bold text-sm text-gray-800">{cartItem.quantity}</span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                updateQuantity(product.id, 1);
              }}
              className="px-4 py-1 hover:bg-gray-200 transition-colors font-bold text-gray-700"
            >
              +
            </button>
          </div>
        ) : (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-full mt-2 py-1.5 bg-[#ffd814] hover:bg-[#f7ca00] rounded-full text-xs font-medium border border-[#fcd200] transition-colors"
          >
            Add to Cart
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default ProductCard