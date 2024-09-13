import React, { useEffect, useState } from 'react'
import Breadcrumb1 from '../Components/Breadcrumb1'
import ProductSmCard from '../Components/ProductSmCard'

const AllShop = ({categories}) => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        let allProduct = []
        categories.map(category => {
            category.products.map(product => {
                allProduct.push(product)
            })
        })
        setAllProducts(allProduct)
    }, [])
    
    let categoryData = {
        title: 'All Products',
        count: allProducts.length
    }

    let linksMap = [
        {
            title: 'All Products',
            url: '/shop/all'
        }
    ]

  return (
    <div className='my-10'>
        <div className='lg:w-[80%] lg:mx-auto mx-5'>
            <Breadcrumb1 linksMap={linksMap} category={categoryData} />
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10'>
                {allProducts.map((product, index) => (
                    <ProductSmCard key={index} product={product} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllShop