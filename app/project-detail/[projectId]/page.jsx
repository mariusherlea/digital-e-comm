"use client";
import Breadcrumb from "@/app/_components/Breadcrumb";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import ProjectBanner from "./_components/ProjectBanner";
import ProjectInfo from "./_components/ProjectInfo";
import ProductList from "@/app/_components/ProductList";

function ProjectDetail({ params }) {
  const [productDetail, setProductDetail] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    params?.projectId && getProductById();
  }, [params?.projectId]);
  const getProductById = () => {
    GlobalApi.getProductById(params?.projectId).then((response) => {
      setProductDetail(response.data.data);
      getProductByCategory(response.data.data);
    });
  };

  const getProductByCategory = () => {
    GlobalApi.getProductByCategory("branza")
      .then((response) => {
        console.log(response.data);
        setProductList(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching products by category:", error);
      });
  };

  return (
    <div className="p-5 py-20 px-10 md:px=28">
      <Breadcrumb />

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5 sm:gap-5">
        <ProjectBanner product={productDetail} />
        <ProjectInfo product={productDetail} />
      </div>
      <ProductList productList={productList} />
    </div>
  );
}

export default ProjectDetail;
