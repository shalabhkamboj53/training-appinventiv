import React, { useContext } from "react";
import { HomeContext } from "../../../../../context/homecontext";

const OtherProducts: React.FC = () => {
  const { ProductList } = useContext(HomeContext);

  return (
    <div className="mt-8">
      <h4 className="text-xl">Grow well with :</h4>
      <div className="grid grid-cols-3 gap-8">
        {ProductList.slice(0, 3).map((el, index) => {
          return (
            <div key={index} className="mt-5">
              <img src={el.imgColor[0].img} alt="" />
              <p className="mt-2">{el.name}</p>
              <p>$ {el.rate}.00</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherProducts;
