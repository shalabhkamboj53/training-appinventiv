import React from "react"
import Navbar from "../components/navbar"

const PrivateRoute = ({children}: {children: React.JSX.Element}) => {
    const condition = true
    if (condition) {
        return(
            <>
                <Navbar />
                {children}
            </>
        )
    } else {
        return(
            <div>You are not authorized to access this page</div>
        )
    }
}

export default PrivateRoute