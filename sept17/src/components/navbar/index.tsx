import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    const Logout = () => {
        localStorage.clear()
        navigate('/login')
    }

    return (
        <div className="navbar bg-base-100 px-10">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">Routes</Link>
            </div>
            <div className="flex-none gap-8">
                <Link to="/">Home</Link>
                {
                    JSON.parse(localStorage.getItem("isLogin")!)?.status ? (
                        <Link to="/dashboard">Dashboard</Link>
                    ):''
                }
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                {
                    JSON.parse(localStorage.getItem("isLogin")!)?.status ? (
                        <button onClick={Logout}>Logout</button>
                    ):(
                        <Link to="/login">Login</Link>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar