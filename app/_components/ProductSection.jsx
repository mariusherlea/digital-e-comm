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

  return (
    <div className="px-10 md:px-20 ">
      ProductSection
      <ProductList productList={productList} />
    </div>
  );
}

export default ProductSection;
