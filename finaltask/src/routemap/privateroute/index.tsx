import { RouteProps } from "../../utils/type"


const PrivateRoute = ({children}:RouteProps) => {
    const isAuth = true
    if(isAuth){
        return (
            <div>{children}</div>
        )
    } else {
        return (
            <div className="w-full h-screen flex justify-center items-center">You are not Authorized to access this page.</div>
        )
    }
}

export default PrivateRoute