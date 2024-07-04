import { ChevronLeft } from 'lucide-react';
import Container from './Container';
import heroBg from '../assets/heroBg.jpg';
import { Link } from 'react-router-dom';

const Cart = () => {
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
          <div className=" basis-2/3  px-4 pt-2 flex flex-col gap-6">
            <div
              className="border-2 border-white h-[18rem] p-4 flex items-start justify-between 
            rounded-lg bg-mysecondary cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="h-full w-[40%] border border-white rounded-lg overflow-hidden">
                <img
                  src={heroBg}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="h-full w-[55%]  flex flex-col items-start justify-between py-2">
                <div>
                  <p className="text-lg text-mytext font-normal font-bold mb-2">
                    Product amazing blablabla
                  </p>
                  <p className="text-base text-mytext font-logo font-bold">
                    100$
                  </p>
                </div>
                <button
                  className={`py-2 px-4 bg-myfooterbg 
                     rounded-lg text-mysecondary font-bold text-lg font-normal self-end`}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="pb-8 w-1/2 min-[1130px]:w-1/3 mt-2 px-4 pt-4 bg-mysecondary">
            <div className="w-full h-12 flex items-center justify-between bg-myfooterbg px-2 mb-6">
              <p className="text-lg text-mysecondary font-logo font-bold">
                Products
              </p>
              <p className="text-lg text-mysecondary font-logo font-bold">
                Number
              </p>
            </div>
            <div className="w-full border-t-2 border-mytext"></div>

            <div className="mt-6 space-y-4">
              <div className="w-full h-12 px-2 flex items-center justify-between bg-mysecondary border border-myfooterbg">
                <p className="text-lg font-normal font-bold">Price</p>
                <p className="text-lg font-normal font-bold">Number</p>
              </div>
              <div className="w-full h-12 px-2 flex items-center justify-between bg-mysecondary border border-myfooterbg">
                <p className="text-lg font-normal font-bold">TAx(15%)</p>
                <p className="text-lg font-normal font-bold">Number</p>
              </div>

              <div className="w-full h-12 flex items-center justify-between bg-myfooterbg px-2 mb-6">
                <p className="text-lg text-mysecondary font-logo font-bold">
                  Total
                </p>
                <p className="text-lg text-mysecondary font-logo font-bold">
                  Number
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
