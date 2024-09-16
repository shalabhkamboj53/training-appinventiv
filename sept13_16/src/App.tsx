import { useEffect } from 'react'
import './App.css'
import { fetchData } from './redux/slices/globalSlice'
import { useAppDispatch } from './redux/selectors'
import Home from './modules/home'

function App() {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  
  return (
    <>
      <Home />
    </>
  )
}

export default App
