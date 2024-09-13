import { Link } from "react-router-dom"

interface NavbarProps {
    navDetails: {
        title: string,
        links: {
            url: string,
            name: string
        }[]
    }
}

const Navbar:React.FC<NavbarProps> = ({navDetails}) => {    
  return (
    <nav style={{display:'flex', justifyContent:'space-between', padding:'20px 80px'}}>
      <h1>{navDetails.title}</h1>
        <ul style={{display:'flex', justifyContent:'space-evenly', listStyle:'none'}}>
            {navDetails.links.map((link, index) => <li key={index} style={{margin:'auto 0 auto 20px'}}><Link to={link.url} style={{textDecoration:'none'}}>{link.name}</Link></li>)}
        </ul>
    </nav>
  )
}

export default Navbar
