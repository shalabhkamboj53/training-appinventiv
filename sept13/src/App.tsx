import { useEffect } from 'react'
import './App.css'
import { fetchData } from './redux/slices/globalSlice'
import { useAppDispatch } from './redux/store'
import Navbar from './components/Navbar'
import TodoInput from './components/TodoInput'
import TodoGrid from './components/TodoGrid'

function App() {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  
  return (
    <>
      <Navbar />
      <TodoInput />
      <TodoGrid />
    </>
  )
}

export default App
