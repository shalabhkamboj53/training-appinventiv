import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RouteType } from "../utils/type"
import Home from "../module/home"
import PrivateRoute from "./privateroute"
import PublicRoute from "./publicroute"
import ContactUs from "../module/contactUs"


const RouteMap = () => {
    const RouteJSON:RouteType[] = [
        {
            "path": "/",
            "isExact": true,
            "isPrivate": false,
            "component": Home
        },
        {
            "path": "/contact-us",
            "isExact": true,
            "isPrivate": false,
            "component": ContactUs
        }
    ]
    
  return (
    <>
        <BrowserRouter>
            <Routes>
                {RouteJSON.map((route, index) => {
                    if(route.isPrivate){
                        return (
                            <Route key={index} path={route.path} element={<PrivateRoute><route.component /></PrivateRoute>} />
                        )
                    } else {
                        return (
                            <Route key={index} path={route.path} element={<PublicRoute><route.component /></PublicRoute>} />
                        )
                    }
                })}
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default RouteMap