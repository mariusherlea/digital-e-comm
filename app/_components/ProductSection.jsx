"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import GlobalApi from "../_utils/GlobalApi";

function ProductSection() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getLatestProducts();
  }, []);

  const getLatestProducts = () => {
    GlobalApi.getLatestProducts().then((response) => {
      // console.log(response.data.data);
      setProductList(response.data.data);
    });
  };

  const filterProductList = (category) => {
    const result = productList.filter(
      (item) => item.attributes.category === category
    );
    return result;
  };

  return (
    productList && (
      <div className="px-10 md:px-20 ">
        {/**Latest product */}
        <h2 className="font-medium text-[20px] my-3">Brand New</h2>
        <ProductList productList={productList} />
        {/** Source Code Products */}
        <h2 className="font-medium text-[20px] my-3">Branza</h2>
        <ProductList productList={filterProductList("branza")} />
        {/** Icons pack*/}
        <h2 className="font-medium text-[20px] my-3">Icons</h2>
        <ProductList productList={productList} />
      </div>
    )
  );
}

export default ProductSection;
