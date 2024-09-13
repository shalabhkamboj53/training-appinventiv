import { useCallback, useState } from 'react'
import React from 'react'

export const Usecallback = ()=>{
    const [input, setInput] = useState('')
    const [data, setData] = useState([])
  
    const EnterData = useCallback(()=>{
      setData([...data, input])
    }, [input])
  
    return(
      <>
      <h1>useCallback</h1>
  
        <input type="number" style={{margin:'20px 0', padding:'10px 20px'}} placeholder='Enter Value to enter to array' value={input} onChange={(e)=>{setInput(
          e.target.value
        )}} /><br />
  
        <div style={{margin:'20px 0'}}>
          <button style={{margin:'0 10px 0 0'}} onClick={()=>{
            console.log('button Clicked');
            EnterData()
          }}>Add element</button>
        </div>  
        <h3>
          Array : {data.map((item, index) => {
            return (
              <span key={index}>
                {
                  index == 0 ? (
                    <span>{item}</span>
                  ) : (
                    <span>, {item} </span>
                  )
                }
              </span>
            )
          })}
        </h3>
      </>
    )
  }