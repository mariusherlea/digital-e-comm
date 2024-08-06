import Image from "next/image";
import React from "react";

function ProductItem({ product }) {
  const bannerUrl = product?.attributes?.banner?.data?.attributes?.url;
  const baseUrl = "http://localhost:1337";

  const imageUrl = bannerUrl ? `${baseUrl}${bannerUrl}` : null;

  //   console.log("Banner URL:", bannerUrl);
  return (
    <div>
      {product.attributes.title}
      {}
      <div>
        {imageUrl && (
          <Image src={imageUrl} alt="banner" width={100} height={100} />
        )}
      </div>
    </div>
  );
}

export default ProductItem;
