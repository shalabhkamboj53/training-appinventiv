import BreakPointWrap from "../../../../components/breakpointwrap"
import GreenBtn from "../../../../components/greenbtn"

const Cta = () => {
  return (
    <div className="py-14">
        <BreakPointWrap>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                <div className="md:me-28 mt-10 md:order-1 order-2">
                    <h3 className="text-5xl mb-5">PLANTS MAKE PEOPLE</h3>
                    <p className="font-light mb-8">Follow along with Florida realtor Bonnie as she designs her ideal living space with houseplants & care tools from Bloomscape and gets expert guidance from Lindsay on our Grow-How® Team.</p>
                    <GreenBtn>SHOP COLLECTION</GreenBtn>
                </div>
                <div className="order-1 md:order-2">
                    <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-AAMbq4QHeHbn-right-pl.png?v=1722649581" className="w-full" alt="" />
                </div>
            </div>
        </BreakPointWrap>
    </div>
  )
}

export default Cta