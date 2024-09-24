import { CartContext } from "../../context/cartContext"
import { Product } from "../../utils/types"
import { useContext } from "react"

const ProductBox = ({product}:{product: Product}) => {
    const { Cart, setCart } = useContext(CartContext)
    
    const addToCart = () => {
        const itemFound = Cart.items.find((item) => item.id === product.id)
        if (itemFound) {
            setCart({
                type: 'INCREMENT_ITEM',
                payload: { id: product.id }
            })
        } else {
            setCart({
                type: 'ADD_ITEM',
                payload: { ...product, quantity: 1 }
            })
        }
    }

  return (
    <div>
        <div className="border border-gray-200 rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center" />
            <div className="mt-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500">Rs. {product.price}.00 /-</p>
                <button className="btn btn-accent mt-3" onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductBox