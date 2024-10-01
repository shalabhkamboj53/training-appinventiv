import React, { useContext } from "react"
import BreakPointWrap from "../../../../components/breakpointwrap"
import { HomeContext } from "../../../../context/homecontext"
import Card from "./card"

const FeatureProducts: React.FC = () => {
    const { ProductList } = useContext(HomeContext)

    const FeaturedProducts = ProductList.filter(product => product.isFeatured)

  return (
    <div className="py-14">
        <BreakPointWrap>
            <h2 className="text-center text-3xl pb-10">HEAR FROM OUR PLANT FAMILY</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                {
                    FeaturedProducts.map((product, index) => (
                        <Card key={index} product={product} />
                    ))
                }
            </div>
        </BreakPointWrap>
    </div>
  )
}

export default FeatureProducts