import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {
  const { cart, cartTotal, cartCount } = useCart();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-[1500px] mx-auto p-4 flex flex-col lg:flex-row gap-5">

        <div className="flex-1 bg-white p-5">
          <h1 className="text-3xl font-medium border-b pb-4 mb-4">Shopping Cart</h1>
          {cart.length === 0 ? (
            <div className="py-10 text-center">
              <h2 className="text-xl mb-4">Your Amazon Cart is empty.</h2>
              <Link to="/products" className="text-[#007185] hover:underline">Shop today's deals</Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
              <div className="text-right border-t pt-4">
                <span className="text-xl">Subtotal ({cartCount} items): <span className="font-bold">${cartTotal.toFixed(2)}</span></span>
              </div>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="w-full lg:w-72 bg-white p-5 h-fit flex flex-col gap-4">
            <div className="flex items-center gap-2 text-green-700 text-sm">
              <div className="w-5 h-5 rounded-full bg-green-700 text-white flex items-center justify-center text-[10px]">✓</div>
              <span>Your order qualifies for FREE Shipping</span>
            </div>
            <div className="text-lg">
              Subtotal ({cartCount} items): <span className="font-bold">${cartTotal.toFixed(2)}</span>
            </div>
            <Link 
              to="/checkout"
              className="w-full py-2 bg-[#ffd814] hover:bg-[#f7ca00] rounded-lg text-center font-medium border border-[#fcd200]"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Cart