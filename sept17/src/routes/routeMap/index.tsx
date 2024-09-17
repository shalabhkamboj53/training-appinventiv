import React from "react"
import Login from "../../modules/login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PrivateRoutes from "../privateRoutes"
import Dashboard from "../../modules/dashboard"
import Home from "../../modules/home"
import PublicRoutes from "../publicRoutes"
import Contact from "../../modules/contact"
import About from "../../modules/about"

const RouteMap = () => {
    const RouteList: {
        path: string,
        isPrivate: boolean,
        component: React.ReactElement
    }[] = [
            {
                path: '/login',
                isPrivate: false,
                component: <Login />
            },
            {
                path: '/dashboard',
                isPrivate: true,
                component: <Dashboard />
            },
            {
                path: '/contact',
                isPrivate: false,
                component: <Contact />
            },
            {
                path: '/about',
                isPrivate: false,
                component: <About />
            },
            {
                path: '/',
                isPrivate: false,
                component: <Home />
            },
        ]
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {
                        RouteList.map((el, id) => {
                            return el.isPrivate ? (
                                <Route path={el.path} element={<PrivateRoutes>{el.component}</PrivateRoutes>} key={id} />
                            ) : (
                                <Route path={el.path} element={<PublicRoutes>{el.component}</PublicRoutes>} key={id} />
                            );
                        })
                    }

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteMap