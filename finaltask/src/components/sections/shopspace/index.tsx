import BreakPointWrap from "../../breakpointwrap"

const ShopSpace = () => {
    const Products = [
        {
            img:"https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p6-2_720x.jpg?v=1685928748",
            name: "Pothos Marble Queen",
            price: "$68.00",
            id: 1,
            colors: ["#ede5da", "#000000", "#e7e8e9", "#c38364"],
        },
        {
            img:"https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p4-2_720x.jpg?v=1685929377",
            name: "Fiddle Leaf Fig Bambino",
            price: "$35.00",
            id: 2,
            colors: ["#ede5da", "#000000", "#c38364"],
        },
        {
            img:"https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p7-2_720x.jpg?v=1685927824",
            name: "Bird of Paradise",
            price: "$78.00",
            id: 3,
            colors: ["#ede5da", "#000000", "#e7e8e9", "#c38364"],
        },
    ]
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
                        Products.map((product, index) => (
                            <div key={index}>
                                <div className="flex gap-5 group mb-3">
                                    <div className="w-[40%]">
                                        <img src={product.img} alt="product" className="md:w-full w-[50%]" />
                                    </div>
                                    <div className="w-[60%]">
                                        <h3 className="hover:text-[#4ca886] text-xl transition-all hover:cursor-pointer">{product.name}</h3>
                                        <p className="mt-2">{product.price}</p>
                                        <div className="flex mt-2">
                                            {
                                                product.colors.map((color, index) => (
                                                    <div key={index} className="w-5 h-5 rounded-full bg-[#4ca886] mx-1 border hover:cursor-pointer" style={{backgroundColor: color}}></div>
                                                ))
                                            }
                                        </div>
                                        <button className="underline hidden group-hover:block mt-2 hover:text-[#4ca886] transition-all delay-100 ease-linear">Add to Cart</button>
                                    </div>
                                </div>
                                {
                                    index === Products.length - 1 ? null : <hr className="mb-3" />
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