import { useRef, useState } from 'react'
import React from 'react'

export const ReactMemo = () => {
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const inputBox = useRef(null)
  
    return(
      <>
        <h1>React.memo</h1>
        <p>see console.log()</p>
  
        <input type="text" style={{margin:'20px 0', padding:'10px 20px'}} placeholder='Enter Value to enter to array' ref={inputBox} /><br />
        <div style={{margin:'20px 0'}}>
          <button style={{margin:'0 10px 0 0'}} onClick={() => setData1([...data1, inputBox.current.value])}>Add data to Array 1</button>
          <button onClick={() => setData2([...data2, inputBox.current.value])}>Add data to Array 2</button>
        </div>
  
        <PrintUl data1={data1} />
        <MemoPrintUl data2={data2} />
        
      </>
    )
  }
  
  export const MemoPrintUl = React.memo(({data2}) => {
    console.log('MemoPrintUl Rendered');
    
    return(
      <div style={{margin:'30px 0'}}>
        <h2>Array 2</h2>
        <ul style={{listStyle:'none'}}>
          {data2.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    )
  })
  
  export const PrintUl = ({data1}) => {
    console.log('PrintUl Rendered');
    
    return(
      <div style={{margin:'30px 0'}}>
        <h2>Array 1</h2>
        <ul style={{listStyle:'none'}}>
          {data1.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    )
  }