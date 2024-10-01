import React, { useContext } from "react";
import { ContactContext } from "../../../../context/contactcontext";
import { Link } from "react-router-dom";

const Footertop: React.FC = () => {
  const { ContactFooterData } = useContext(ContactContext);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[30%_64%] gap-20  w-full pb-14">
      <div className="flex flex-col gap-3">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-4V9nWEPuPOlogo-hc-1.png?v=1724641994"
            alt="img"
            className="w-32 lg:w-40 object-cover mb-3"
          />
          <p className="text-sm">Email: info@ecomposershop.com</p>
          <p className="text-sm">Phone: (212) 555-1234</p>
          <p className="mt-3">Sign up for sale, new arrivals & more</p>
        </div>
        <div className="flex items-center justify-between border border-black p-1 flex-wrap">
          <div className="flex items-center gap-1 lg:gap-3 w-[60%] lg:w-auto mb-2 lg:mb-0 mt-1">
            <i className="bi bi-envelope ml-2"></i>
            <input
              type="text"
              name="signup"
              id="signup"
              className="outline-none border-none flex-grow mr-2 bg-white text-black"
              placeholder="Email address"
            />
          </div>
          <button className="text-white bg-black px-6 lg:px-6 py-2 lg:py-3 text-sm hover:bg-purple-200 hover:text-black transition-colors duration-500">
            Sign Up
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 w-full">
        {ContactFooterData.map((el, index) => (
          <div key={index} className="flex flex-col gap-3 items-left pl-2">
            <h2 className="text-lg text-black font-bold">{el.title}</h2>
            {el.links.map((element, index) => (
              <Link
                to={element.link}
                key={index}
                className="text-lg text-gray-600 cursor-pointer hover:text-red-500"
              >
                {element.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footertop;
