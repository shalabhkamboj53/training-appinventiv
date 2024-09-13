import React, { useCallback, useState } from 'react'
import { useContext } from 'react'
import { ApiDataContext } from '../../context/ApiData'
import DisplayData from '../components/DisplayData'

const Home = () => {
    const { setApiData, apiData } = useContext(ApiDataContext)
    const [InputData, setInputData] = useState(0)
    const [arrayChanged, setarrayChanged] = useState(0)
    
    const getData = useCallback( async () => {
            console.log('Button Clicked');

            const data = await fetch(`https://dummyjson.com/products?limit=${InputData}`)
            const response = await data.json()
            
            setarrayChanged(arrayChanged + 1)
            setApiData(response.products)
            
        },
      [InputData]
    )
    
  return (
    <div>
        <input type="number" value={InputData} style={{margin:'20px', padding:'10px 20px'}} onChange={(e)=>{setInputData(e.target.value)}} placeholder='Enter number of products to get' /><br />
        <button onClick={getData}>Get Data</button><br /><br />
        <p>Api Fetched: {arrayChanged} times</p>

        <DisplayData ApiData={apiData} />
    </div>
  )
}

export default Home