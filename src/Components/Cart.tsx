import { ChevronLeft } from 'lucide-react';
import Container from './Container';
// import heroBg from '../assets/heroBg.jpg';
import { Link } from 'react-router-dom';
import useCartStore from '../Services/cartStore';
// import { useState } from 'react';
import { motion } from 'framer-motion';

type props = {
  title: string;
  price: string;
  id: number;
  image: string;
};

function CartProduct({ title, price, image, id }: props) {
  const { removeFromCart } = useCartStore();

  return (
    <div
      className=" h-[18rem] p-4 flex items-start justify-between 
            rounded-lg bg-mysecondary cursor-pointer hover:shadow-xl transition-all duration-300"
    >
      <div className="h-full w-[40%]  rounded-lg overflow-hidden">
        <img src={image} className="w-full h-full object-cover object-center" />
      </div>
      <div className="h-full w-[55%]  flex flex-col items-start justify-between py-2">
        <div>
          <p className="text-lg text-mytext font-normal font-bold mb-2">
            {title}
          </p>
          <p className="text-base text-mytext font-logo font-bold">{`$${price}`}</p>
        </div>
        <button
          onClick={() => removeFromCart(id)}
          className={`py-2 px-4 bg-myfooterbg 
                     rounded-lg text-mysecondary font-bold text-lg font-normal self-end`}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

const Cart = () => {
  const { cart } = useCartStore();
  // const [price, setPrice] = useState(0);
  let price: number = 0;

  cart?.map((item) => (price += parseInt(item.price)));
  let priceFormated: string = price.toLocaleString();
  let tax: number = Math.round(price * 0.15);
  let taxFormated: string = tax.toLocaleString();
  let total: number = price + tax;
  let totalFormated: string = total.toLocaleString();

  return (
    <div className="h-fit  pt-16 pb-16">
      <Container className="">
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer mb-12">
            <ChevronLeft className="size-8 text-myaccent font-bold" />
            <p className="text-2xl font-bold text-myaccent">Back To Products</p>
          </div>
        </Link>

        <div className="flex flex-col min-[1130px]:flex-row items-center min-[1130px]:items-start gap-10">
          <motion.div className=" basis-2/3  px-4 pt-2 flex flex-col gap-6">
            {cart?.map((item, index) => (
              <CartProduct
                key={index}
                title={item.title}
                price={item.price}
                image={item.image}
                id={item.id}
              />
            ))}

            {/* <CartProduct title="product 1" price="$100" image={heroBg} id={1} /> */}
          </motion.div>

          <div className="pb-8 w-1/2 min-[1130px]:w-1/3 mt-2 px-4 pt-4 bg-mysecondary">
            <div className="w-full h-12 flex items-center justify-between bg-myfooterbg px-2 mb-6">
              <p className="text-lg text-mysecondary font-logo font-bold">
                Products
              </p>
              <p className="text-lg text-mysecondary font-logo font-bold">
                {cart?.length}
              </p>
            </div>
            <div className="w-full border-t-2 border-mytext"></div>

            <div className="mt-6 space-y-4">
              <div className="w-full h-12 px-2 flex items-center justify-between bg-mysecondary border border-myfooterbg">
                <p className="text-lg font-normal font-bold">Price</p>
                <p className="text-lg font-normal font-bold">
                  {'$' + priceFormated}
                </p>
              </div>
              <div className="w-full h-12 px-2 flex items-center justify-between bg-mysecondary border border-myfooterbg">
                <p className="text-lg font-normal font-bold">TAx(15%)</p>
                <p className="text-lg font-normal font-bold">
                  {'$' + taxFormated}
                </p>
              </div>

              <div className="w-full h-12 flex items-center justify-between bg-myfooterbg px-2 mb-6">
                <p className="text-lg text-mysecondary font-logo font-bold">
                  Total
                </p>
                <p className="text-lg text-mysecondary font-logo font-bold">
                  {'$' + totalFormated}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
