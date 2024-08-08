import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ productList }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {productList.map(
        (item, index) =>
          index <= 2 && <ProductItem product={item} key={index} />
      )}
    </div>
  );
}

export default ProductList;
