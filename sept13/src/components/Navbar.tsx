import { useAppSelector, userDataSelect } from "../redux/store"

const Navbar = () => {
    const userData = useAppSelector(userDataSelect)    
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">{userData?.Company}</a>
                </div>
                <div className="navbar-center">
                    Hi, {userData?.name}
                </div>
                <div className="navbar-end">
                    <a className="btn">{userData?.username}</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar