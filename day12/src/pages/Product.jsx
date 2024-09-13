import React from 'react'
import { useParams } from 'react-router-dom'
import ProDetails from '../Components/ProDetails'
import ProductSmCard from '../Components/ProductSmCard'

const Product = ({categories}) => {
    const { id } = useParams()
    let productsDetails = categories.find(category => category.products.find(product => product.id === id))
    let productDetails = productsDetails.products.find(product => product.id === id)
    // console.log(productsDetails);
    
  return (
    <div>
        <ProDetails productDetails={productDetails} productsDetails={productsDetails} />
        <div className='lg:w-[70%] lg:mx-auto mx-8 my-20'>
            <h3 className='text-5xl font-extrabold my-8'>Related Products</h3>
            <div>
                <div className='grid lg:grid-cols-3 grid-cols-2 gap-5'>
                    {productsDetails.products.map((product, index) => (
                        product.id !== id ?(
                            <ProductSmCard key={index} product={product} />
                        ) : ''
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product