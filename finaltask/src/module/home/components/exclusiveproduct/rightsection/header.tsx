import React, { useContext } from "react";
import { HomeContext } from "../../../../../context/homecontext";

const Header: React.FC= () => {
    const {ExclusiveProductItem} = useContext(HomeContext)

  return (
    <div className="mb-4">
      {Array.from({ length: ExclusiveProductItem?.starRating ?? 0 }, (_, index) => (
        <i className="bi bi-star-fill text-[#ffc634]" key={index}></i>
      ))}{" "}
      <span className="ms-2">({ExclusiveProductItem?.reviewCount}+ rating)</span>
      <h3 className="mb-5 mt-2 text-4xl">{ExclusiveProductItem?.name}</h3>
      <p>
        {ExclusiveProductItem?.isSale ? (
          <span>
            <span className="text-2xl">
              $ {ExclusiveProductItem.saleRate}.00
            </span>
            <span className="ms-3 line-through text-gray-400">
              $ {ExclusiveProductItem.rate}.00
            </span>
            <span className="ms-3 bg-[#de1d1d] text-white rounded-badge px-4 py-2">
              {Math.round(
                ((ExclusiveProductItem.rate - ExclusiveProductItem.saleRate) /
                  ExclusiveProductItem.rate) *
                  100
              )}
              % OFF
            </span>
            <span className="ms-5 text-[#279453]">
              <i className="bi bi-lightning-charge-fill"></i> Only{" "}
              {ExclusiveProductItem.stock} left in stock
            </span>
          </span>
        ) : (
          <span>
            <span className="text-2xl">$ {ExclusiveProductItem?.rate}.00</span>
            <span className="ms-5 text-[#279453]">
              <i className="bi bi-lightning-charge-fill"></i> Only{" "}
              {ExclusiveProductItem?.stock} left in stock
            </span>
          </span>
        )}
      </p>
    </div>
  );
};

export default Header;
