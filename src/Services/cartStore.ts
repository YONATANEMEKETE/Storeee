import { create } from 'zustand';
import { Data, Product } from './Types';

type StoreData = {
  cart: Data;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
};

const useCartStore = create<StoreData>((set) => ({
  cart: [
    // {
    //   id: 100,
    //   title: 'Product 1',
    //   price: '100',
    //   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    // },
  ],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),
}));

export default useCartStore;
