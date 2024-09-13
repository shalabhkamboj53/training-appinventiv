import React from 'react'
import { Link } from 'react-router-dom'

const ProductSmCard = ({index, product}) => {
  return (
    <Link key={index} to={`/product/${product.id}`}>
      <div className='relative bg-black bg-opacity-5 overflow-hidden hover:cursor-pointer pb-16'>
          <div className="badge badge-outline absolute top-5 left-5 bg-white border-0 text-gray-500 px-4 py-3 font-bold z-10">Sale!</div>
          <img src={product.img} alt={product.name} className='w-full scale-in-center' />
          <div className='absolute bottom-8 left-0 right-0 text-center py-3 px-5'>
              <h4 className='text-base font-bold'>{product.name}</h4>
              <p className='text-xs'>${product.price}</p>
          </div>
      </div>
    </Link>
  )
}

export default ProductSmCard