import { useReducer } from 'react';
import './App.css'
import RouterMap from './routerMap'
import cartReducer from './context/cartReducer';
import { CartContext, initialState } from './context/cartContext';

function App() {
  const [Cart, setCart] = useReducer(cartReducer, initialState);

  return (
    <>
      <CartContext.Provider value={{ Cart, setCart }}>
        <RouterMap />
      </CartContext.Provider>
    </>
  )
}

export default App
