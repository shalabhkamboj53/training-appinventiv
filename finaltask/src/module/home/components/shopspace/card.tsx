import React from "react";
import { ProductType } from "../../../../utils/type";

interface CardProps {
  product: ProductType;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="flex gap-5 group mb-3">
      <div className="w-[40%]">
        <img
          src={product.imgColor[0].img}
          alt="product"
          className="md:w-full w-[50%]"
        />
      </div>
      <div className="w-[60%]">
        <h3 className="hover:text-[#4ca886] text-xl transition-all hover:cursor-pointer">
          {product.name}
        </h3>
        <p className="mt-2">$ {product.rate}.00</p>
        <div className="flex mt-2">
          {product.imgColor.map((imgColor, index) => (
            <div
              key={index}
              className="w-5 h-5 rounded-full bg-[#4ca886] mx-1 border hover:cursor-pointer"
              style={{ backgroundColor: imgColor.color }}
            ></div>
          ))}
        </div>
        <button className="underline hidden group-hover:block mt-2 hover:text-[#4ca886] transition-all delay-100 ease-linear">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
