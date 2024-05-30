import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../../data/products";

function ProductList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 p-6 ">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductList;
