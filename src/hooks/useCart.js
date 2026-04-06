import { useCart as useCartContext } from '../context/CartContext';

export const useCart = () => {
  const context = useCartContext();
  return {
    cart: context.cart,
    cartTotal: context.cartTotal,
    cartCount: context.cartCount,
    addToCart: context.addToCart,
    removeFromCart: context.removeFromCart,
    updateQuantity: context.updateQuantity,
    clearCart: context.clearCart,
  };
};