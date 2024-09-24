import React from 'react'
import Navbar from '../components/navbar'

const PublicRoute = ({children}:{children:React.JSX.Element}) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default PublicRoute