import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
import Category from './pages/Category'
import Footer from './Components/Footer'
import Product from './pages/Product'
import Login from './pages/Login'
import AllShop from './pages/AllShop'

const categories = [
  {
    title: 'Bedroom',
    image: '/cat/cat-1-300x300.jpg',
    count: 4,
    products: [
      {
        name: 'Product Name 1',
        img: '/cat/cat-1-300x300.jpg',
        price: 200,
        id: '1',
        sDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur eveniet consequatur consectetur at tempora nesciunt laborum, cumque incidunt fuga qui necessitatibus facilis, amet animi quidem debitis, eaque autem error?',
      },
      {
        name: 'Product Name 2',
        img: '/cat/cat-1-300x300.jpg',
        price: 250,
        id: '2',
        sDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur eveniet consequatur consectetur at tempora nesciunt laborum, cumque incidunt fuga qui necessitatibus facilis, amet animi quidem debitis, eaque autem error?',
      },
      {
        name: 'Product Name 4',
        img: '/cat/cat-1-300x300.jpg',
        price: 300,
        id: '3',
        sDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur eveniet consequatur consectetur at tempora nesciunt laborum, cumque incidunt fuga qui necessitatibus facilis, amet animi quidem debitis, eaque autem error?',
      },
      {
        name: 'Product Name 4',
        img: '/cat/cat-1-300x300.jpg',
        price: 350,
        id: '4',
        sDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur eveniet consequatur consectetur at tempora nesciunt laborum, cumque incidunt fuga qui necessitatibus facilis, amet animi quidem debitis, eaque autem error?',
      }
    ]
  },
  {
    title: 'Office',
    image: '/cat/cat-2-300x300.jpg',
    count: 4,
    products: [
      {
        name: 'Product Name 1',
        img: '/cat/cat-2-300x300.jpg',
        price: 200,
        id: '5',
        sDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur eveniet consequatur consectetur at tempora nesciunt laborum, cumque incidunt fuga qui necessitatibus facilis, amet animi quidem debitis, eaque autem error?',
      },
      {
        name: 'Product Name 2',
        img: '/cat/cat-2-300x300.jpg',
        price: 250,
        id: '6',
        sDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur eveniet consequatur consectetur at tempora nesciunt laborum, cumque incidunt fuga qui necessitatibus facilis, amet animi quidem debitis, eaque autem error?',
      },
      {
        name: 'Product Name 3',
        img: '/cat/cat-2-300x300.jpg',
        price: 300,
        id: '7',
        sDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur eveniet consequatur consectetur at tempora nesciunt laborum, cumque incidunt fuga qui necessitatibus facilis, amet animi quidem debitis, eaque autem error?',
      },
      {
        name: 'Product Name 4',
        img: '/cat/cat-2-300x300.jpg',
        price: 350,
        id: '8',
        sDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur eveniet consequatur consectetur at tempora nesciunt laborum, cumque incidunt fuga qui necessitatibus facilis, amet animi quidem debitis, eaque autem error?',
      }
    ]
  },
  {
    title: 'Living Room',
    image: '/cat/cat-3-300x300.jpg',
    count: 4,
    products: [
      {
        name: 'Product Name 1',
        img: '/cat/cat-3-300x300.jpg',
        price: 200,
        id: '9',
        sDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur eveniet consequatur consectetur at tempora nesciunt laborum, cumque incidunt fuga qui necessitatibus facilis, amet animi quidem debitis, eaque autem error?',
      },
      {
        name: 'Product Name 2',
        img: '/cat/cat-3-300x300.jpg',
        price: 250,
        id: '10',
        sDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur eveniet consequatur consectetur at tempora nesciunt laborum, cumque incidunt fuga qui necessitatibus facilis, amet animi quidem debitis, eaque autem error?',
      },
      {
        name: 'Product Name 3',
        img: '/cat/cat-3-300x300.jpg',
        price: 300,
        id: '11',
        sDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur eveniet consequatur consectetur at tempora nesciunt laborum, cumque incidunt fuga qui necessitatibus facilis, amet animi quidem debitis, eaque autem error?',
      },
      {
        name: 'Product Name 4',
        img: '/cat/cat-3-300x300.jpg',
        price: 350,
        id: '12',
        sDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur eveniet consequatur consectetur at tempora nesciunt laborum, cumque incidunt fuga qui necessitatibus facilis, amet animi quidem debitis, eaque autem error?',
      }
    ]
  },
  {
    title: 'Decor',
    image: '/cat/cat-4-300x300.jpg',
    count: 4,
    products: [
      {
        name: 'Product Name 1',
        img: '/cat/cat-4-300x300.jpg',
        price: 200,
        id: '13',
        sDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur eveniet consequatur consectetur at tempora nesciunt laborum, cumque incidunt fuga qui necessitatibus facilis, amet animi quidem debitis, eaque autem error?',
      },
      {
        name: 'Product Name 2',
        img: '/cat/cat-4-300x300.jpg',
        price: 250,
        id: '14',
        sDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur eveniet consequatur consectetur at tempora nesciunt laborum, cumque incidunt fuga qui necessitatibus facilis, amet animi quidem debitis, eaque autem error?',
      },
      {
        name: 'Product Name 3',
        img: '/cat/cat-4-300x300.jpg',
        price: 300,
        id: '15',
        sDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur eveniet consequatur consectetur at tempora nesciunt laborum, cumque incidunt fuga qui necessitatibus facilis, amet animi quidem debitis, eaque autem error?',
      },
      {
        name: 'Product Name 4',
        img: '/cat/cat-4-300x300.jpg',
        price: 350,
        id: '16',
        sDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur eveniet consequatur consectetur at tempora nesciunt laborum, cumque incidunt fuga qui necessitatibus facilis, amet animi quidem debitis, eaque autem error?',
      }
    ]
  },
]


function App() {
  return (
    <>
      <div className=''>
        <BrowserRouter>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
          <Navbar />
          <Routes>
            <Route path="" element={<Home categories={categories} />} />
            <Route path="/category/:category" element={<Category categories={categories} />} />
            <Route path="/product/:id" element={<Product categories={categories} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop/all" element={<AllShop categories={categories} />} />
          </Routes>
          <Footer categories={categories} />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
