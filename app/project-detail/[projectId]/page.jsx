"use client";
import Breadcrumb from "@/app/_components/Breadcrumb";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";

function ProjectDetail({ params }) {
  const [productDetail, setProductDetail] = useState(null);
  useEffect(() => {
    params?.projectId && getProductById();
  }, [params?.projectId]);
  const getProductById = () => {
    GlobalApi.getProductById(params?.projectId).then((response) => {
      setProductDetail(response.data.data);
    });
  };

  return (
    <div className="p-5 py-20 px-10 md:px=28">
      <Breadcrumb />
    </div>
  );
}

export default ProjectDetail;
