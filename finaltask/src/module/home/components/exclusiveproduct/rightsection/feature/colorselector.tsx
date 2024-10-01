import React, { useContext } from 'react'
import { HomeContext } from '../../../../../../context/homecontext';

const ColorSelector: React.FC = () => {
    const { ExcusiveProductFeature, setExclusiveProductFeature, ExclusiveProductItem } = useContext(HomeContext)
    
  return (
    <div className="mb-14">
        <p className="mt-8 mb-8">Color: {ExcusiveProductFeature?.Color}</p>
        <div>
          {ExclusiveProductItem?.imgColor.map((el, index) => {
            return (
              <span
                key={index}
                className={`px-6 py-4 border-[1px] rounded-full ${
                  el.name == ExcusiveProductFeature?.Color
                    ? "border-black"
                    : "border-gray-300"
                } cursor-pointer relative me-5`}
              >
                <span
                  className={`rounded-full px-5 py-5 absolute top-1 left-1`}
                  style={{ backgroundColor: el.color }}
                  onClick={() => {
                    setExclusiveProductFeature({ ...ExcusiveProductFeature!, Color: el.name });
                  }}
                ></span>
              </span>
            );
          })}
        </div>
      </div>
  )
}

export default ColorSelector