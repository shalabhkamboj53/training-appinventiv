import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../module/home"
import PrivateRoute from "./privateRoute"
import PublicRoute from "./publicRoute"
import { RouteArr } from "../utils/types"

const RouterMap = () => {
    const routes : RouteArr[] = [
        {
            name: 'Home',
            path: '/',
            component: Home,
            isPrivate: false
        }
    ]

  return (
    <div>
        <BrowserRouter>
            <Routes>
                {
                    routes.map((route, index) => {
                        if(route.isPrivate) {
                            return (
                                <Route key={index} path={`${route.path}`} element={<PrivateRoute><route.component /></PrivateRoute>} />
                            )
                        } else {
                            return (
                                <Route key={index} path={`${route.path}`} element={<PublicRoute><route.component /></PublicRoute>} />
                            )
                        }
                    })
                }
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterMap