import React from 'react'
import ProductCard from './ProductCard';

const DisplayData = ({ApiData}) => {  
  return (
    <div style={{display:'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap:'40px'}}>
      {ApiData ? (
        ApiData.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))
      ) : <p>Enter the number top get data</p>}
      
    </div>
  )
}

export default DisplayData