import React, { useContext } from "react";
import { HomeContext } from "../../../../../../context/homecontext";


const SizeSelector: React.FC = () => {
  const { ExcusiveProductFeature, setExclusiveProductFeature, ExclusiveProductItem } = useContext(HomeContext);

  return (
    <div>
      <p className="mt-8 mb-3">Size: {ExcusiveProductFeature?.Size}</p>
      <div>
        {ExclusiveProductItem?.size.map((el, index) => {
          return (
            <button
              key={index}
              className={`btn btn-ghost border-[1px] px-10 me-5 mb-3 ${
                el == ExcusiveProductFeature?.Size
                  ? "border-black"
                  : "border-gray-300"
              } hover:border-black`}
              onClick={() => {
                setExclusiveProductFeature({
                  ...ExcusiveProductFeature!,
                  Size: el,
                });
              }}
            >
              {el}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SizeSelector;
