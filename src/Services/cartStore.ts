import { create } from 'zustand';
import { Data, Product } from './Types';

type StoreData = {
  cart: Data;
  addToCart?: (product: Product) => void;
  removeFromCart?: (id: number) => void;
};

const useCartStore = create<StoreData>((set) => ({
  cart: [
    {
      id: 1,
      title: 'test',
      price: 'test',
      image: 'test',
    },
  ],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),
}));

export default useCartStore;
