import { useContext, useEffect } from "react"
import BreakPointWrap from "../../../../components/breakpointwrap"
import { HomeContext } from "../../../../context/homecontext"
import LeftSection from "./leftsection"
import RightSection from "./rightsection"

const ExclusiveProduct = () => {
  const { ProductList, setExclusiveProductFeature, setExclusiveProductItem } = useContext(HomeContext)

  useEffect(() => {
    const temp = ProductList?.filter(product => product.isExclusive)[0]
    setExclusiveProductFeature({
      Size: temp?.size[0],
      Planter: temp?.planter[0],
      Color: temp?.imgColor[0].name
    })
    if (setExclusiveProductItem) {
      setExclusiveProductItem(temp)
    }
  }, [ProductList, setExclusiveProductFeature, setExclusiveProductItem])
  
  return (
    <div className="py-14">
        <BreakPointWrap>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <LeftSection />
            <RightSection />
          </div>
        </BreakPointWrap>
    </div>
  )
}

export default ExclusiveProduct