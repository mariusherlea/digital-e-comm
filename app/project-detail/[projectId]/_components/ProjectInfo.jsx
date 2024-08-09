import React from "react";
import { BadgeCheck, BadgeXIcon, ShoppingCart } from "lucide-react";

function ProjectInfo({ product }) {
  const descriptionText = product?.attributes?.description?.map(
    (descItem, index) => <h2 key={index}>{descItem.children[0]?.text}</h2>
  );
  return (
    <div>
      <h2 className="text-[20px] uppercase">{product?.attributes?.title}</h2>
      <h2 className="text-[15px] text-sky-400">
        {product?.attributes?.category}
      </h2>

      {descriptionText}
      <h2 className="flex gap-2 mt-5 text-[13px]">
        {product?.attributes?.instantDelivery ? (
          <BadgeCheck className="text-green-400 " />
        ) : (
          <BadgeXIcon className="text-red-400 " />
        )}
        Eligible for Instant delivery
      </h2>

      <h2 className="text-[32px] mt-5 text-primary font-medium ">
        $ {product?.attributes?.price}
      </h2>
      <button className="flex gap-2 p-3 hover:bg-green-400 bg-primary text-white rounded-lg mt-5">
        <ShoppingCart />
        Add to cart
      </button>
    </div>
  );
}

export default ProjectInfo;
