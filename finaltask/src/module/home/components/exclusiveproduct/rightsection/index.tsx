import React from "react";
import Header from "./header";
import Feature from "./feature";
import Cart from "./cart";
import OtherProducts from "./otherproducts";

const RightSection: React.FC = () => {
  return (
    <div>
        <Header />
        <hr />
        <Feature />
        <Cart />
        <div className="flex mt-8 items-center">
            <div className="flex me-4 items-center">
            <i className="bi bi-shield-check text-2xl"></i>
            <p className="text-xs ms-2">
                Secure <br />
                Checkout
            </p>
            </div>
            <div>
            <img
                src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/trust-p.svg?v=1685954121"
                alt=""
            />
            </div>
        </div>
        <OtherProducts  />
    </div>
  );
};

export default RightSection;
