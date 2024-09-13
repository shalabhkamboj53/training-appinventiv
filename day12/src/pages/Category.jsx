import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductSmCard from '../Components/ProductSmCard';
import Breadcrumb1 from '../Components/Breadcrumb1';

const Category = ({categories}) => {
    let { category } = useParams();

    let categoryData = categories.find((cat) => cat.title === category)
    
    let linksMap = [
        {
            title: categoryData.title,
            url: `/shop/${category}`
        }
    ]

  return (
    <div className='my-10'>
        <div className='lg:w-[80%] lg:mx-auto mx-5'>
            <Breadcrumb1 linksMap={linksMap} category={categoryData} />
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10'>
                {categoryData.products.map((product, index) => (
                    <ProductSmCard key={index} product={product} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Category