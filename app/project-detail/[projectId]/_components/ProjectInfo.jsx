import React from "react";

function ProjectInfo({ product }) {
  const descriptionText = product?.attributes?.description?.map(
    (descItem, index) => <p key={index}>{descItem.children[0]?.text}</p>
  );
  return (
    <div>
      <h2 className="text-[20px]">{product?.attributes?.title}</h2>
      <h2 className="text-[15px] text-sky-400">
        {product?.attributes?.category}
      </h2>
      {descriptionText}
      <h2 className="text-[32px] mt-5 text-primary font-medium">
        $ {product?.attributes?.price}
      </h2>
      <button className="bg-primary text-white px-5 py-2 rounded-lg mt-5">
        Add to cart
      </button>
    </div>
  );
}

export default ProjectInfo;
