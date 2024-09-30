import Navbar from "../../components/navbar"
import { RouteProps } from "../../utils/type"

const PublicRoute = ({children}:RouteProps) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default PublicRoute