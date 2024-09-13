import { useState } from 'react'
import './App.css'
import { ApiDataContext } from '../context/ApiData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


function App() {
  const [apiData, setApiData] = useState([])

  return (
    <>
      <ApiDataContext.Provider value={{ apiData, setApiData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ApiDataContext.Provider>
    </>
  )
}

export default App
