import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Data, Product } from './Types';

type StoreData = {
  cart: Data;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
};

const useCartStore = create<StoreData>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const cart = get().cart;
          if (!cart[product.id]) {
            return { cart: [...state.cart, product] };
          }

          return { cart: state.cart };
        }),
      removeFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCartStore;
