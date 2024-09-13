import React, { useContext, useEffect, useRef } from 'react'
import { DataContext } from '../context/data'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const Home = () => {
    const { data, setData } = useContext(DataContext)
    const InputData = useRef(null)

    useEffect(() => {
      setData('Hello, World!')
    }, [])
    
    useEffect(() => {
      if(data === 'Hello, World!') {
        return () => {
          alert("Changed value to Custom Value, The app will re-render now!")
        }
      } else {
        return () => {
          alert("Resetted the value the app will re-render now!")
        }
      }
    }, [data])
    

  return (
    <div>
        <div>
            <img src={reactLogo} style={{margin: '0 20px 0 0'}} alt="React Logo" width="100" />
            <img src={viteLogo} alt="Vite Logo" width="100" />
            <h2>{data}</h2>
            <div>
                <button className='btn' style={{margin: '0 0 20px 0'}} onClick={()=>{setData('Hello, World!')}}>Reset</button><br />
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    setData(InputData.current.value)
                    InputData.current.value = ""
                }}>
                    <input type="text" placeholder='Enter a Custom Value...' ref={InputData} style={{margin: '0 0 20px 0', padding:'10px 20px'}} /><br />
                    <button className="btn" type='submit'>Change</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Home