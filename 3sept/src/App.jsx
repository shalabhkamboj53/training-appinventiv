import { useCallback, useMemo, useRef, useState } from 'react'
import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { ReactMemo } from './pages/ReactMemo'
import { Usememoo } from './pages/Usememoo'
import { Usecallback } from './pages/Usecallback'

function App() {
  const [Theme, setTheme] = useState(false)

  return (
    <div className={`${Theme && 'dark'}`}>
      <BrowserRouter>
        <div style={{position:'fixed', top:'0', left:'0', right:'0'}}>
          <div style={{display:'flex', justifyContent:'space-evenly', padding:'20px 20px', backgroundColor:'gray'}}>
            <Link style={{color:'black', textDecoration:'underline'}} to='/'>React.memo</Link>
            <Link style={{color:'black', textDecoration:'underline'}} to='/usememo'>useMemo</Link>
            <Link style={{color:'black', textDecoration:'underline'}} to='/usecallback'>useCallback</Link>
            <button onClick={()=>{setTheme(!Theme)}}>{
              Theme ? 'Light Mode' : 'Dark Mode'  
            }</button>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<ReactMemo />} />
          <Route path='/usememo' element={<Usememoo />} />
          <Route path='/usecallback' element={<Usecallback />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
