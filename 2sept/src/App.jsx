import { useEffect, useState } from 'react'
import './App.css'
import { DataContext } from './context/data'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [data, setData] = useState('')

  return (
    <>
    <DataContext.Provider value={{data, setData}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  )
}

export default App
