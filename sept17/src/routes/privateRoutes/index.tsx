import Navbar from "../../components/navbar"

const PrivateRoutes = ({children}:any) => {
    if(JSON.parse(localStorage.getItem('isLogin')!)?.status){
        return (
            <>
                <Navbar />
                {children}
            </>
        )
    } else {
        return (
          <div className="h-[100vh] w-full justify-center items-center flex">You are not authorized to access this page</div>
        )
    }
}

export default PrivateRoutes