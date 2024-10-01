import React, { useContext } from "react";
import { HomeContext } from "../../../../../context/homecontext";

const LeftSection: React.FC = () => {
    const { ExcusiveProductFeature, setExclusiveProductFeature, ExclusiveProductItem } = useContext(HomeContext)

  return (
    <div>
      <div className="grid md:grid-cols-5 grid-cols-1 gap-3">
        <div className="md:col-span-1 col-span-1 md:order-1 order-2">
          <div className="grid md:block grid-cols-4 gap-8">
            {ExclusiveProductItem?.imgColor.map((el, index) => {
              return (
                <img
                key={index}
                src={el.img}
                className="mb-3 cursor-pointer"
                alt=""
                onClick={() => {
                  setExclusiveProductFeature({ ...ExcusiveProductFeature! ,Color: el.color })
                }}
                />
              );
            })}
          </div>
        </div>
        <div className="md:col-span-4 col-span-1 md:order-2 order-1">
          {ExclusiveProductItem?.imgColor.map((el, index) => {
            return (
              <img
                key={index}
                src={el.img}
                className={`${el.color == ExcusiveProductFeature?.Color ? "block" : "hidden"}`}
                alt=""
              />
            );
          })}
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-10">
        <div>
          <i className="bi bi-truck text-4xl"></i>
          <h4 className="text-center mt-4 font-semibold">Free Shipping</h4>
          <p className="text-center text-sm mt-2">
            Get free standard shipping when you spend $150 or more
          </p>
        </div>

        <div>
          <i className="bi bi-patch-check text-4xl"></i>
          <h4 className="text-center mt-4 font-semibold">Guarantee</h4>
          <p className="text-center text-sm mt-2">
            If your plant dies within 30 days, we'll replace it for free
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
