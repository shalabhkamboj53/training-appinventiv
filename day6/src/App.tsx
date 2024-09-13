import './App.css'
import Navbar from '../components/Navbar'
import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom'

const navDetails: {title: string, links: {name: string, url: string}[]} = {
  title: 'Navbar',
  links: [
    {name: 'Home', url: '/'},
    {name: 'About', url: '/about'},
    {name: 'Contact', url: '/contact'}
  ]
}

const Home = () => {
  return (
    <>
      <Navbar navDetails={navDetails} />
    </>
  )
}

const Contact = () => {
  let { slug } = useParams();
  console.log(slug);
  
  return(
    <>
      contact
    </>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/contact/:slug' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
