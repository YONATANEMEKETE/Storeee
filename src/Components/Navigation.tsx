import { UserCircle } from 'lucide-react';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';

const Navigation = () => {
  return (
    <div
      className="max-w-[750px] min-[750px]:mx-auto mx-4  relative z-10 top-4 inset-x-auto h-[4rem] bg-mysecondary 
    rounded-md shadow-xl flex items-center justify-between px-4"
    >
      <div className="flex items-center gap-x-4 cursor-pointer">
        <img src={logo} className="size-12 object-cover object-center" />
        <p className="text-xl font-logo text-myaccent font-extrabold ">
          STOREEE
        </p>
      </div>
      <div className="flex items-center gap-x-4">
        <div
          className="size-12 rounded-full cursor-pointer bg-myprimary transition-colors duration-300 
        grid place-content-center hover:bg-myaccent "
        >
          <UserCircle className=" text-mysecondary transition-colors duration-100" />
        </div>
        <div className="relative size-10 p-2 border border-myaccent rounded-sm cursor-pointer grid place-content-center hover:bg-myprimary transition-all duration-300">
          <img src={cart} className="object-cover object-center size-8" />
          <div className="absolute -top-3 -right-3 size-6 bg-myfooterbg rounded-full text-mysecondary text-xs grid place-content-center">
            4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
