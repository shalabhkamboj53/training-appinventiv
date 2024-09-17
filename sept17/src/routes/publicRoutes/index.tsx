import Navbar from '../../components/navbar'

const PublicRoutes = ({children}:any) => {
  return (
    <>
        <Navbar />
        { children }
    </>
  )
}

export default PublicRoutes