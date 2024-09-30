import BreakPointWrap from "../../breakpointwrap"

const ProductDisplay = () => {
    const ProductList = [
        {
            name: "Cacti and Succulents",
            img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-u1AT5kdRrebn-plan-1.png?v=1722649648",
        },
        {
            name: "Flowering Plants",
            img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-HEbiRRpzXYbn-plan-2.png?v=1722649674",
        },
        {
            name: "Faux & Preserved",
            img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-UN7gnfKNbybn-plan-3.png?v=1722649700",
        },
    ]
  return (
    <div className="py-14">
        <BreakPointWrap>
            <h2 className="text-center text-3xl pb-10">HEAR FROM OUR PLANT FAMILY</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                {
                    ProductList.map((product, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-black">
                                <img src={product.img} alt="product" className="w-full hover:opacity-80" />
                            </div>
                            <h3 className="text-center mt-5 hover:text-[#4ca886] text-xl transition-all hover:cursor-pointer">{product.name}</h3>
                        </div>
                    ))
                }
            </div>
        </BreakPointWrap>
    </div>
  )
}

export default ProductDisplay