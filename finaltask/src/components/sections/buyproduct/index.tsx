import { useState } from "react"
import BreakPointWrap from "../../breakpointwrap"
import GreenBtn from "../../greenbtn"

const BuyProduct = () => {
  const Product = {
      name: 'Monstera Deliciosa',
      stars: 5,
      price: 89,
      isSale: true,
      salePrice: 68,
      size: ['Small', "Large"],
      planter: ["Grow Pot", "Grant", "Hyde"],
      stock: 6,
      color: [
        {
          name: 'Cream',
          color: '#ede5da'
        },
        {
          name: 'Black',
          color: '#000000'
        },
        {
          name: 'Stone',
          color: '#e7e8e9'
        },
        {
          name: 'Terracotta',
          color: '#c38364'
        }
      ]
    }

    const [Size, setSize] = useState('Small')
    const [Planter, setPlanter] = useState('Grow Pot')
    const [Color, setColor] = useState('Cream')
    const [CartQuantity, setCartQuantity] = useState(1)

  return (
    <div className="py-14">
        <BreakPointWrap>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div>

            </div>
            <div>
              <div className="mb-4">
                {
                  Array.from({length: Product.stars}, (_, index) => (
                    <i className="bi bi-star-fill text-[#ffc634]" key={index}></i>
                  ))
                } <span className="ms-2">
                  (100+ rating)
                </span>
                <h3 className="mb-5 mt-2 text-4xl">
                  {
                    Product.name
                  }
                </h3>
                <p>
                  {
                    Product.isSale ? (
                      <span>
                        <span className="text-2xl">
                          $ {Product.salePrice}.00
                        </span>
                        <span className="ms-3 line-through text-gray-400">
                          $ {Product.price}.00
                        </span>
                        <span className="ms-3 bg-[#de1d1d] text-white rounded-badge px-4 py-2">
                          {Math.round((Product.price - Product.salePrice) / Product.price * 100)}% OFF
                        </span>
                        <span className="ms-5 text-[#279453]">
                          <i className="bi bi-lightning-charge-fill"></i> Only 6 left in stock
                        </span>
                      </span>
                    ): (
                      <span>
                        <span className="text-2xl">
                          $ {Product.price}.00
                        </span>
                        <span className="ms-5 text-[#279453]">
                          <i className="bi bi-lightning-charge-fill"></i> Only 6 left in stock
                        </span>
                      </span>
                    )
                  }
                </p>
              </div>
              <hr />
              <div>
                <p className="mt-8 mb-3">
                  Size: {Size}
                </p>
                <div>
                  {
                    Product.size.map((el, index)=> {
                      return (
                        <button key={index} className={`btn btn-ghost border-[1px] px-10 me-5 ${el==Size?'border-black': 'border-gray-300'} hover:border-black`} onClick={()=>{setSize(el)}}>{el}</button>
                      )
                    })
                  }
                </div>
              </div>

              <div>
                <p className="mt-8 mb-3">
                  Planter: {Planter}
                </p>
                <div>
                  {
                    Product.planter.map((el, index)=> {
                      return (
                        <button key={index} className={`btn btn-ghost border-[1px] px-10 me-5 ${el==Planter?'border-black': 'border-gray-300'} hover:border-black`} onClick={()=>{setPlanter(el)}}>{el}</button>
                      )
                    })
                  }
                </div>
              </div>

              <div className="mb-14">
                <p className="mt-8 mb-8">
                  Color: {Color}
                </p>
                <div>
                  {
                    Product.color.map((el, index)=> {
                      return (
                        <span className={`px-6 py-4 border-[1px] rounded-full ${el.name==Color?'border-black':'border-gray-300'} cursor-pointer relative me-5`}>
                          <span key={index} className={`rounded-full px-5 py-5 absolute top-1 left-1`} style={{backgroundColor: el.color}} onClick={()=>{setColor(el.name)}}></span>
                        </span>
                      )
                    })
                  }
                </div>
              </div>
              
              <div className="flex">
                <div>
                  <div className="border px-4 py-4 me-5">
                    <p>
                      <span>
                        <i className="bi bi-dash cursor-pointer" onClick={()=>{
                          if (CartQuantity > 1) {
                            setCartQuantity(CartQuantity - 1);
                          }
                        }}></i>
                      </span>
                      <span className="ms-5">
                        {CartQuantity}
                      </span>
                      <span>
                        <i className="bi bi-plus ms-5 cursor-pointer" onClick={()=>{setCartQuantity(CartQuantity+1)}}></i>
                      </span>
                    </p>
                  </div>
                </div>
                <GreenBtn className="w-[60%]">
                  Add To Cart
                </GreenBtn>
              </div>

            </div>
          </div>
        </BreakPointWrap>
    </div>
  )
}

export default BuyProduct