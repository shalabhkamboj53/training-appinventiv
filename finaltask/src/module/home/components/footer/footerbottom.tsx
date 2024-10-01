import React, { useContext } from "react";
import { HomeContext } from "../../../../context/homecontext";
import { Link } from "react-router-dom";

const FooterBottom: React.FC = () => {
    const {FooterData} = useContext(HomeContext)
  return (
    <div className="pt-5 grid grid-cols-1 md:grid-cols-3 text-white text-xs">
      <div className="mb-5">
        <ul className="flex gap-5 items-center h-full md:justify-start justify-center">
          {FooterData?.terms.map((el, index) => {
            return (
              <li key={index}>
                <Link to={el.link}>{el.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mb-5">
        <img src={FooterData?.paymentPartners} className="mx-auto" alt="" />
      </div>
      <div className="mb-5">
        <ul className="flex md:justify-end justify-center h-full items-center gap-10 text-xl">
          {FooterData?.socialMedia.map((el, index) => {
            return (
              <li key={index}>
                <Link to={el.link}>
                  <i className={el.icon}></i>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FooterBottom;
