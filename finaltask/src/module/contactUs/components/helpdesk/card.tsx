import React from "react";
import { HelpDeskDataType } from "../../../../utils/type";

interface CardType {
    item: HelpDeskDataType
}

const Card: React.FC<CardType> = ({item}) => {
  return (
    <div className="bg-[#f4f4ff] py-10 px-14 rounded-xl">
      <div className="flex">
        <div className="border-[1px] border-[#fc7d80] me-auto ms-0 rounded-full py-4 px-5">
          <i className={`${item.icon} text-[#fc7d80] text-3xl`}></i>
        </div>
      </div>
      <h3 className="text-3xl font-normal mt-5">{item.title}</h3>
      <p className="mt-3 mb-5 text-[#7a7a7f]">{item.description}</p>
      <a
        href={item.viewMore}
        className="text-[#69696b] hover:text-[#fc7d80] cursor-pointer"
      >
        View More
      </a>
    </div>
  );
};

export default Card;
