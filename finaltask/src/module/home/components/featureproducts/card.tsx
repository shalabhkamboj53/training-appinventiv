import React from "react";
import { ProductType } from "../../../../utils/type";

interface CardProps {
    product: ProductType
}

const Card: React.FC<CardProps> = ({product}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-black">
        <img
          src={product.imgColor[0].img}
          alt="product"
          className="w-full hover:opacity-80"
        />
      </div>
      <h3 className="text-center mt-5 hover:text-[#4ca886] text-xl transition-all hover:cursor-pointer">
        {product.name}
      </h3>
    </div>
  );
};

export default Card;
