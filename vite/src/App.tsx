import './App.css'
import Navbar from '../components/Navbar'
import { Routes, Route, BrowserRouter, useParams, Link } from 'react-router-dom'
import blogData from '../components/blogData'

const navDetails: {title: string, links: {name: string, url: string}[]} = {
  title: 'Navbar',
  links: [
    {name: 'Home', url: '/'},
    {name: 'About', url: '/about'},
    {name: 'Blogs', url: '/blogs'},
    {name: 'Contact', url: '/contact'}
  ]
}

const Home = () => {
  return (
    <>
    <h1 style={{textAlign:'center', margin:'40px auto'}}>Home Page</h1>
    </>
  )
}

const Slug = () => {
  let { slug }:any = useParams();

  let myBlog = blogData.find(blog => blog.id === parseInt(slug))

  return(
    <>
      <h1 style={{textAlign:'center', margin:'80px auto 20px auto'}}>{myBlog?.title}</h1>
      <p style={{textAlign:'center', margin:'20px auto'}}>{myBlog?.description}</p>
    </>
  )
}

const Blog = () => {
  return(
    <>
      <h1 style={{textAlign:'center', margin:'80px auto 20px auto'}}>Blogs</h1>

      <div style={{display:'flex', justifyContent:'space-evenly'}}>
      {
        blogData.map((blog, index) => {
          return(
              <Link to={`/blog/${blog.id}`}>
                <div key={index} style={{padding:'20px', margin:'20px 10px', border:'2px solid black', borderRadius:'10px'}}>
                    <h2>{blog.title}</h2>
                    <p>{blog.date}</p>
                </div>
              </Link>
          )
        })
      }
      </div>
    </>
  )
}

const About = () => {
  return (
    <h1 style={{textAlign:'center', margin:'40px auto'}}>About Us Page</h1>
  )
}

const Contact = () => {
  return (
    <h1 style={{textAlign:'center', margin:'40px auto'}}>Contact Page</h1>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar navDetails={navDetails} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/blog/:slug' element={<Slug />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
