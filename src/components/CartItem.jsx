import React from 'react'
import { useCart } from '../context/CartContext'
import { AiOutlineDelete } from 'react-icons/ai'

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 border-b pb-4 mb-4">
      <div className="w-40 h-40 flex-shrink-0">
        <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium line-clamp-2">{item.title}</h3>
        <p className="text-sm text-green-700 mt-1">In Stock</p>
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center border rounded-md shadow-sm bg-gray-100">
            <button 
              onClick={() => updateQuantity(item.id, -1)}
              className="px-3 py-1 hover:bg-gray-200"
            >
              -
            </button>
            <span className="px-3 bg-white">{item.quantity}</span>
            <button 
              onClick={() => updateQuantity(item.id, 1)}
              className="px-3 py-1 hover:bg-gray-200"
            >
              +
            </button>
          </div>
          <button 
            onClick={() => removeFromCart(item.id)}
            className="text-xs text-[#007185] hover:underline flex items-center gap-1"
          >
            <AiOutlineDelete /> Delete
          </button>
        </div>
      </div>
      <div className="text-right">
        <span className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    </div>
  )
}

export default CartItem