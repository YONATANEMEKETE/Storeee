import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className="w-max grid min-[750px]:grid-cols-2 min-[1200px]:grid-cols-3  items-center gap-4 mx-auto">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
