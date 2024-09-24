import { products } from "../../mockData/products"
import ProductBox from "../productBox"

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {
            products?.map((product, index) => (<ProductBox product={product} key={index} />))
        }
    </div>
  )
}

export default ProductGrid