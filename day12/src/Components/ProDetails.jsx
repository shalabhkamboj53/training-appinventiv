import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProDetails = ({productDetails, productsDetails}) => {
    const [quantity, setQuantity] = useState(1)
    console.log(productsDetails.title);
    
  return (
    <div className='lg:w-[70%] lg:mx-auto mx-8 my-10 '>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>

            <div className=''>
                <div className='relative bg-black bg-opacity-5 flex items-center xl:h-[700px] lg:h-[500px]'>
                    <img src={productDetails.img} className='w-full my-auto' alt="" />
                    <div className="badge badge-outline absolute top-5 left-5 bg-white border-0 text-gray-500 px-4 py-3 font-bold z-10">Sale!</div>
                </div>
                <div className='grid grid-cols-2 my-4 gap-5'>
                    <img src={productDetails.img} className='w-full' alt="" />
                    <img src={productDetails.img} className='w-full' alt="" />
                </div>
            </div>

            <div className='sticky top-0'>

                <div className=''>
                    <div>
                        <div>
                            <ul className='flex separator text-gray-400 font-semibold text-sm'>
                                <li>Home</li>
                                <li>{productsDetails.title}</li>
                                <li>{productDetails.name}</li>
                            </ul>
                        </div>
                        <div className='mt-5 font-bold text-gray-500 text-base'>
                            <Link to={`/category/${productsDetails.title}`}>
                                {productsDetails.title}
                            </Link>
                        </div>
                        <div className='mt-4 text-2xl font-extrabold'>
                            {productDetails.name}
                        </div>
                        <div >
                            <span className='text-3xl font-extrabold text-yellow-800 opacity-60 me-2'>${productDetails.price}</span>
                            <span className='text-lg font-bold'>& Free Shipping</span>
                        </div>
                        <div className='mb-5'>
                            <p className='text-sm text-gray-500 font-semibold'>
                                {productDetails.sDesc}
                            </p>
                        </div>
                        <hr />
                        <div className='my-5 flex gap-8'>
                            <div className="join grid grid-cols-3 rounded-none w-[200px]">
                                <button className="join-item btn btn-outline" onClick={()=>{
                                    if(quantity > 1){
                                        setQuantity(quantity - 1)
                                    }
                                }}>-</button>
                                <button className="join-item btn btn-outline hover:bg-white">{quantity}</button>
                                <button className="join-item btn btn-outline" onClick={()=>{
                                    setQuantity(quantity + 1)
                                }}>+</button>
                            </div>
                            <button className="btn rounded-none opacity-70">Add to Cart</button>
                        </div>
                        <hr />
                        <div className='my-5'>
                            <p className='text-sm'>
                                <span>SKU: N/A</span>
                                <span className='mx-5'>Category: <span className='text-yellow-800 opacity-60'>{productsDetails.title}</span></span>
                            </p>
                        </div>
                        <div className='border-2 py-3 w-full relative'>
                            <span className='absolute -top-3  left-0 right-0 text-center'>
                                <span className='bg-white px-5'>Guaranteed Safe Checkout</span>
                            </span>
                            <div className='flex justify-center gap-5 my-5'>
                                <img src="/payment/visa.png" className='w-10' alt="" />
                                <img src="/payment/mastercard.webp" className='w-10' alt="" />
                                <img src="/payment/americanexpress.png" className='w-10' alt="" />
                            </div>
                        </div>
                        <div className='my-5'>
                            <p className='text-sm font-normal'>
                                <span className='font-extrabold'>
                                    Free shipping on orders over $50!
                                </span>
                            </p>
                            <ul className='list-disc text-sm font-normal ms-5'>
                                <li>
                                    No-Risk Money Back Guarantee!
                                </li>
                                <li>
                                    No Hassle Refunds
                                </li>
                                <li>
                                    Secure Payments
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProDetails