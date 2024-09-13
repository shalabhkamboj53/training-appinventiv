import React from 'react'
import { Link } from 'react-router-dom'

const Section1 = ({categories}) => {
  return (
    <div className='py-10'>
        <div className='text-center'>
            <p>Shop by category</p>
            <h3 className='text-4xl font-extrabold mt-5'>Shop by category</h3>
        </div>
        <div className='w-[80%] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                {categories.map((category, index) => (
                    <Link to={`/category/${category.title}`} key={index}>
                        <div className='relative'>
                            <img src={category.image} alt={category.title} className='w-full' />
                            <div className='text-center absolute bottom-8 z-10 bg-white left-0 right-0 mx-10 py-3 px-5'>
                                <div className=''>
                                    <h4 className='text-base font-bold'>{category.title}</h4>
                                    <p className='text-xs'>{category.count} products</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Section1