import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { CartItem } from "../../utils/types";

const CartBox = ({item}: {item:CartItem}) => {
    const { setCart } = useContext(CartContext)

    const handleIncreaseQuantity = (item:CartItem) => {
        setCart({
            type: 'INCREMENT_ITEM',
            payload: { id: item.id }
        })
    }

    const handleDecreaseQuantity = (item: CartItem) => {
        setCart({
            type: 'DECREMENT_ITEM',
            payload: { id: item.id }
        })
    }

    const handleRemoveItem = (item: CartItem) => {
        setCart({
            type: 'REMOVE_ITEM',
            payload: { id: item.id }
        })
    }

  return (
    <div className="flex items-center justify-between border-b border-gray-200 p-4">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover object-center"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-sm text-gray-500">Rs. {item.price}.00 /-</p>

          <button className="btn btn-outline mx-1 my-2" onClick={()=>{handleDecreaseQuantity(item)}}>-</button>
          <button className="btn btn-outline mx-1 my-2">{item.quantity}</button>
          <button className="btn btn-outline mx-1 my-2" onClick={()=>{handleIncreaseQuantity(item)}}>+</button>
          <button className="btn btn-error mx-1 my-2" onClick={()=>{handleRemoveItem(item)}}><i className="bi bi-trash3 text-xl"></i></button>
        </div>
      </div>
    </div>
  );
};

export default CartBox;
