import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ productList }) {
  return (
    <div>
      {productList.map((item, index) => (
        <ProductItem product={item} key={index} />
      ))}
    </div>
  );
}

export default ProductList;
