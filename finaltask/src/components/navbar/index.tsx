import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="px-3 py-4 bg-[#f1f1f1] sticky top-0 border-b-[#dbdcdc] border-b-[1px] z-50">
        <div className="flex justify-between items-center">
            <div>
                <img src="https://ecomposer.app/images/logo-text.png" className="h-8" alt="" />
            </div>
            <div className="md:block hidden">
                <ul className="flex space-x-8">
                    <li>
                        <Link to="/" className="text-[#333]">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact-us" className="text-[#333]">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="md:hidden block">
                <button className="btn btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar