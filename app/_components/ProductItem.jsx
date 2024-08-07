import Image from "next/image";
import React from "react";
import { SquareChevronRight } from "lucide-react";

function ProductItem({ product }) {
  const bannerUrl = product?.attributes?.banner?.data?.attributes?.url;
  const baseUrl = "http://localhost:1337";

  const imageUrl = bannerUrl ? `${baseUrl}${bannerUrl}` : null;

  //   console.log("Banner URL:", bannerUrl);
  return (
    <div>
      <div>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="banner"
            width={400}
            height={350}
            className="rounded-t-lg h-[190px] object-cover"
          />
        )}

        <div className="p-3">
          <h2 className="text-[14px] font-medium ">
            {product.attributes.title}
          </h2>
          {product?.attributes?.category && (
            <h2 className="text-[12px] font-medium line-clamp-1 text-gray-400 flex gap-2">
              <SquareChevronRight className="h-4 w-4" />
              {product.attributes.category}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
