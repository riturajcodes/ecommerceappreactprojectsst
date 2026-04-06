import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'

const Checkout = () => {
  const { cart, cartTotal } = useCart();
  const shipping = 0.00;
  const tax = cartTotal * 0.15;
  const grandTotal = cartTotal + shipping + tax;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-[1000px] mx-auto p-4 flex flex-col md:flex-row gap-8 mt-6">
        <div className="flex-1 bg-white p-6 rounded shadow-sm">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Order Summary</h2>
          <div className="space-y-3">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.title} (x{item.quantity})</span>
                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-80 bg-white p-6 rounded shadow-sm h-fit">
          <h2 className="text-lg font-bold mb-4">Final Totals</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Items:</span><span>${cartTotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping:</span><span>${shipping.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Estimated Tax:</span><span>${tax.toFixed(2)}</span></div>
            <div className="flex justify-between text-lg font-bold text-red-700 border-t pt-2 mt-2">
              <span>Order Total:</span><span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full mt-6 py-2 bg-[#ffd814] hover:bg-[#f7ca00] rounded-lg font-medium border border-[#fcd200]">Place your order</button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Checkout