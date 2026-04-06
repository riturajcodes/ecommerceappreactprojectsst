import { useCart as useCartContext } from '../context/CartContext';

export const useWishlist = () => {
  const context = useCartContext();
  return {
    wishlist: context.wishlist,
    toggleWishlist: context.toggleWishlist,
  };
};