import React, { useState } from "react";
import GreenBtn from "../../../../../components/greenbtn"

const Cart: React.FC = () => {
    const [CartQuantity, setCartQuantity] = useState(1)
  return (
    <div className="sm:flex">
      <div className="flex sm:block mb-3">
        <div className="border px-4 py-4 me-5">
          <p>
            <span>
              <i
                className="bi bi-dash cursor-pointer"
                onClick={() => {
                  if (CartQuantity > 1) {
                    setCartQuantity(CartQuantity - 1);
                  }
                }}
              ></i>
            </span>
            <span className="ms-5">{CartQuantity}</span>
            <span>
              <i
                className="bi bi-plus ms-5 cursor-pointer"
                onClick={() => {
                  setCartQuantity(CartQuantity + 1);
                }}
              ></i>
            </span>
          </p>
        </div>
      </div>

      <GreenBtn className="w-[60%] mb-3">Add To Cart</GreenBtn>
    </div>
  );
};

export default Cart;
