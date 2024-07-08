import ProductCard from './ProductCard';
import { Data } from '../Services/Types';
import { useQuery } from '@tanstack/react-query';

const ProductList = () => {
  const url = 'https://fakestoreapi.com/products';

  const handleFetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const { data } = useQuery<Data, Error>({
    queryKey: ['products'],
    queryFn: handleFetchData,
    gcTime: 1000 * 60 * 60 * 1,
  });

  const productData = data;

  return (
    <div className="w-max grid min-[750px]:grid-cols-2 min-[1200px]:grid-cols-3  items-start gap-4 mx-auto">
      {productData?.map((product) => {
        return (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            id={product.id}
            image={product.image}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
