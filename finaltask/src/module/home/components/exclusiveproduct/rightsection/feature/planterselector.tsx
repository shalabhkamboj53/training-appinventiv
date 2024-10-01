import React, { useContext } from "react";
import { HomeContext } from "../../../../../../context/homecontext";

const PlanterSelector: React.FC = () => {
    const { ExcusiveProductFeature, setExclusiveProductFeature, ExclusiveProductItem } = useContext(HomeContext)

  return (
    <div>
      <p className="mt-8 mb-3">Planter: {ExcusiveProductFeature?.Planter}</p>
      <div>
        {ExclusiveProductItem?.planter.map((el, index) => {
          return (
            <button
              key={index}
              className={`btn btn-ghost border-[1px] px-10 me-5 mb-3 ${
                el == ExcusiveProductFeature?.Planter
                  ? "border-black"
                  : "border-gray-300"
              } hover:border-black`}
              onClick={() => {
                setExclusiveProductFeature({ ...ExcusiveProductFeature!, Planter: el });
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

export default PlanterSelector;
