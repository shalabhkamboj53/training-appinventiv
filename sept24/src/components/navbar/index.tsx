import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import CartGrid from "../cartGrid"

const Navbar = () => {
    const cartContext = useContext(CartContext)

    const handleClearCart = () => {
        cartContext.setCart({type: "CLEAR_CART"})
    }
  return (
    <>
        <div className="navbar bg-base-100 px-10 py-5">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">CartProject</a>
            </div>
            <div className="indicator">
                <span className="indicator-item badge badge-secondary">{cartContext.Cart.quantity}</span>
                <label htmlFor="my-drawer" className="btn drawer-button">Rs. {cartContext.Cart.total}<i className="bi bi-cart-fill text-xl ms-2"></i></label>
            </div>
        </div>
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-base-200 text-base-content min-h-full w-96 p-4 relative">
                    <h2 className="text-2xl font-bold py-3">Cart</h2>
                    <CartGrid />
                    <div className="absolute bottom-0 left-0 right-0">
                        <div className="p-4 bg-base-200">
                            <div className="flex justify-between items-center">
                                <span>Total</span>
                                <span>Rs. {cartContext.Cart.total}</span>
                                <button className="btn btn-error" onClick={handleClearCart}>Clear Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}

export default Navbar