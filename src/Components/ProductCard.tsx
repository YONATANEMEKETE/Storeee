import { useState } from 'react';
import useCartStore from '../Services/cartStore';
type Props = {
  title: string;
  price: string;
  id: number;
  image: string;
};

const ProductCard = ({ title, price, image, id }: Props) => {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart, removeFromCart } = useCartStore();

  const handleAddToCart = () => {
    if (!isAdded) {
      addToCart({ title, price, image, id });
      setIsAdded(true);
    } else {
      removeFromCart(id);
      setIsAdded(false);
    }
  };

  return (
    <div
      className="w-[350px] h-[400px]  py-2 px-4  bg-mysecondary rounded-lg shadow-md cursor-pointer 
    hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between items-end"
    >
      <div className="h-[60%] w-full">
        <div className="w-full h-[80%] rounded-lg  overflow-hidden mb-4">
          <img
            src={image}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-xl text-mytext font-normal font-extrabold ml-2 mb-2">
          {title}
        </p>
        <p className="text-lg text-mytext font-logo font-extrabold ml-2">{`$${price}`}</p>
      </div>
      <button
        onClick={handleAddToCart}
        className={`py-2 px-4 ${
          isAdded ? 'bg-myfooterbg' : 'bg-myaccent'
        }  rounded-lg text-mysecondary font-bold text-lg font-normal`}
      >
        {isAdded ? 'Added to Cart' : 'Add to cart'}
      </button>
    </div>
  );
};

export default ProductCard;
