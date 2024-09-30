import BreakPointWrap from "../../breakpointwrap"

type Product = {
    name: string,
    price: number,
    id: number,
    colors: string[],
    isOnSale: boolean,
    img: string,
    salePrice: number,
}

const ProductListing = () => {
    const products:Product[] = [
        {
            name: "Pothos Marble Queen",
            price: 68,
            id: 1,
            colors: ["#ede5da", "#000000", "#e7e8e9", "#c38364"],
            isOnSale: false,
            img: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p1-2_720x.jpg?v=1685930236",
            salePrice: 49,
        },
        {
            name: "Pothos Marble Queen",
            price: 68,
            id: 2,
            colors: ["#ede5da", "#000000", "#e7e8e9", "#c38364"],
            isOnSale: true,
            img: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p1-2_720x.jpg?v=1685930236",
            salePrice: 49,
        },
        {
            name: "Pothos Marble Queen",
            price: 68,
            id: 3,
            colors: ["#ede5da", "#000000", "#e7e8e9", "#c38364"],
            isOnSale: false,
            img: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p1-2_720x.jpg?v=1685930236",
            salePrice: 49,
        },
        {
            name: "Pothos Marble Queen",
            price: 68,
            id: 4,
            colors: ["#ede5da", "#000000", "#e7e8e9", "#c38364"],
            isOnSale: false,
            img: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p1-2_720x.jpg?v=1685930236",
            salePrice: 49,
        },

    ]
  return (
    <div className="py-14">
        <BreakPointWrap>
            <div className="text-center">
                <h3 className="text-3xl">HEAR FROM OUR PLANT FAMILY</h3>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 mt-16">
                    {
                        products.map((product, index) => (
                            <div key={index} className="group text-left">
                                <div className="relative">
                                    <img src={product.img} alt="product" className="w-full" />
                                    {
                                        product.isOnSale ? <div className="absolute top-2 right-2 bg-[#29412b] text-white px-2 py-1 text-xs rounded-md">{
                                            `-${Math.floor((product.price - product.salePrice) / product.price * 100)}%`
                                        }</div> : null
                                    }
                                    <div className="absolute bottom-4 w-full text-center hidden group-hover:block">
                                        <button className="btn rounded-badge text-white h-auto py-2 bg-[#29412b] hover:bg-[#4ca886] border-none px-8">Add To Cart</button>
                                    </div>
                                </div>
                                <h3 className="text-sm mt-3">{product.name}</h3>
                                <div className="flex text-sm">
                                    {
                                        product.isOnSale ? <p className="mt-2 font-semibold">${product.salePrice}.00</p> : null
                                    }
                                    {
                                        product.isOnSale ? <p className="mt-2 line-through ms-2 text-gray-400">${product.price}.00</p> : <p className="mt-2 font-semibold">${product.price}.00</p>
                                    }
                                </div>
                                
                                <div className="flex mt-3">
                                    {
                                        product.colors.map((color, index) => (
                                            <div key={index} className="w-5 h-5 rounded-full bg-[#4ca886] mx-1 border" style={{backgroundColor: color}}></div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>  
            </div>
        </BreakPointWrap>
    </div>
  )
}

export default ProductListing