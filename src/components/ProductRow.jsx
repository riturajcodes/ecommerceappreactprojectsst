import React from 'react';
import ProductCard from './ProductCard';

const ProductRow = ({ title, products, isLoading }) => {
  return (
    <div className="bg-white p-5 my-5 mx-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <a href="/" className="text-blue-600 hover:underline text-sm">See all deals</a>
      </div>
      
      <div className="flex overflow-x-auto gap-4 scrollbar-hide pb-4">
        {products.map((product) => (
          <div key={product.id} className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRow;