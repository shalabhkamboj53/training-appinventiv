import Navbar from "../../components/navbar"
import { ReactNodeChildren } from "../../utils/type"

const PublicRoute = ({children}:ReactNodeChildren) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default PublicRoute