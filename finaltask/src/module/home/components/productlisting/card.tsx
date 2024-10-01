import React from "react";
import { ProductType } from "../../../../utils/type";

interface CardProps {
    product: ProductType;
}

const Card: React.FC<CardProps> = ({product}) => {
  return (
    <div className="group text-left px-4">
      <div className="relative">
        <img src={product.imgColor[0].img} alt="product" className="w-full" />
        {product.isSale ? (
          <div className="absolute top-2 right-2 bg-[#29412b] text-white px-2 py-1 text-xs rounded-md">{`-${Math.floor(
            ((product.rate - product.saleRate) / product.rate) * 100
          )}%`}</div>
        ) : null}
        <div className="absolute bottom-4 w-full text-center hidden group-hover:block">
          <button className="btn rounded-badge text-white h-auto py-2 bg-[#29412b] hover:bg-[#4ca886] border-none px-8">
            Add To Cart
          </button>
        </div>
      </div>
      <h3 className="text-sm mt-3">{product.name}</h3>
      <div className="flex text-sm">
        {product.rate ? (
          <p className="mt-2 font-semibold">${product.saleRate}.00</p>
        ) : null}
        {product.isSale ? (
          <p className="mt-2 line-through ms-2 text-gray-400">
            ${product.rate}.00
          </p>
        ) : (
          <p className="mt-2 font-semibold">${product.rate}.00</p>
        )}
      </div>

      <div className="flex mt-3">
        {product.imgColor.map((imgColor, index) => (
          <div
            key={index}
            className="w-5 h-5 rounded-full bg-[#4ca886] mx-1 border"
            style={{ backgroundColor: imgColor.color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Card;
