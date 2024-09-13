import React from 'react'

const ProductCard = ({data}) => {
  return (
        <div style={{border:'2px solid grey', padding:'20px'}}>
            <img src={data.images[0]} style={{width:'100%'}} alt="" />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
        </div>
  )
}

export default ProductCard