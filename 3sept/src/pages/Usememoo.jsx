import { useMemo, useState } from 'react'
import React from 'react'

export const Usememoo = () => {
    const [data, setData] = useState([])
    const [input, setInput] = useState('')
  
    console.log('Parent Rendered');
    
    let sum = useMemo(() => {
      console.log('useMemo Rendered');
      let temp = 0

      data.forEach(element => {
        temp += parseInt(element)
      });

      return temp
    }, [data])

    return(
      <>
        <h1>useMemo</h1>
        <p>see console.log()</p>
  
        <input type="number" style={{margin:'20px 0', padding:'10px 20px'}} placeholder='Enter Value to enter to array' value={input} onChange={(e)=>{setInput(
          e.target.value
        )}} /><br />
  
        <div style={{margin:'20px 0'}}>
          <button style={{margin:'0 10px 0 0'}} onClick={() => setData([...data, input])}>Add element at last</button>
          <button style={{margin:'0 10px 0 0'}} onClick={() => setData((prev)=>{
            prev.shift()
            return [...prev]
          })}>Remove first element</button>
        </div>    
  
        <h3>Sum: {sum}</h3>
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