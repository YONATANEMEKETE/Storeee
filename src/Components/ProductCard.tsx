import heroBg from '../assets/heroBg.jpg';

const ProductCard = () => {
  return (
    <div
      className="w-[350px] h-[400px] py-2 px-4  bg-mysecondary rounded-lg shadow-md cursor-pointer 
    hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between items-end"
    >
      <div className="h-full w-full">
        <div className="w-full h-[60%] rounded-lg  overflow-hidden mb-4">
          <img
            src={heroBg}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-2xl text-mytext font-normal font-extrabold ml-2">
          Product Name
        </p>
        <p className="text-lg text-mytext font-normal font-bold ml-2">110$</p>
      </div>
      <button className="py-2 px-4 bg-myaccent rounded-lg text-mysecondary font-bold text-lg font-normal">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
