import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import CartBox from "../cartBox"

const CartGrid = () => {
    const {Cart} = useContext(CartContext)

  return (
    <div className="grid grid-cols-1">
        {
            Cart.quantity > 0 ?  Cart.items?.map((item, index) => (
                <CartBox key={index} item={item} />
            )) : <div className="text-center mt-5">Cart is Empty</div>
        }
    </div>
  )
}

export default CartGrid