import React, { useContext } from "react";
import { HomeContext } from "../../../../context/homecontext";
import { Link } from "react-router-dom";

const FooterTop: React.FC = () => {
    const {FooterData} = useContext(HomeContext)
  return (
    <div className="pb-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-white">
      {FooterData?.links.map((el, index) => {
        return (
          <div key={index} className="mb-10">
            <h4>{el.title}</h4>
            <ul className="text-sm mt-5">
              {el.list.map((element, index) => {
                return (
                  <li key={index} className="mb-3">
                    <Link to={element.link}>{element.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      <div className="mb-10">
        <h4 className="text-3xl mb-5">{FooterData?.form.title}</h4>
        <p className="mb-8 text-sm">{FooterData?.form.description}</p>
        <div className="relative">
          <input
            type="text"
            placeholder="Email address"
            className="py-3 input input-ghost border-[1px] border-white rounded-none w-full"
            name=""
            id=""
          />
          <i className="bi bi-arrow-up-right absolute right-4 top-2 text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
