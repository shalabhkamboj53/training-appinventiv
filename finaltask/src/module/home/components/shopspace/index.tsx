import { useContext } from "react"
import BreakPointWrap from "../../../../components/breakpointwrap"
import { HomeContext } from "../../../../context/homecontext"
import Card from "./card"

const ShopSpace = () => {
    const { ProductList } = useContext(HomeContext)

    const PopularProduct = ProductList.filter(product => product.isPopular)

    if(PopularProduct.length === 0) return null

  return (
    <div className="py-14">
        <BreakPointWrap>
            <div className="md:flex md:justify-between text-center md:items-center">
                <h2 className="text-3xl mb-5 md:mb-0">SHOP THE SPACE</h2>
                <p className="text-sm hover:text-[#4ca886] hover:cursor-pointer transition-all">View All</p>
            </div>
            <div className="grid md:grid-cols-5 grid-cols-1 md:pt-16 pt-14 gap-5 ">
                <div className="md:col-span-3 md:h-full h-[200px] overflow-hidden relative">
                    <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-AAMbq4QHeHbn-right-pl.png?v=1722649581" className="md:h-full w-full pb-3 absolute md:block min-[500px]:bottom-[-80%] md:bottom-0" alt="" />
                </div>
                <div className="md:col-span-2">
                    {
                        PopularProduct.map((product, index) => (
                            <div key={index}>
                                <Card product={product} />
                                {
                                    index === PopularProduct.length - 1 ? null : <hr className="mb-3" />
                                }
                            </div>
                        ))
                    }
                </div>
            </div>

        </BreakPointWrap>
    </div>
  )
}

export default ShopSpace