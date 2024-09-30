import React from 'react'

const Bg = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="w-full xl:h-[85vh] lg:h-[70vh] md:h-[65vh] relative before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-[url('/hero-bg.png')] before:bg-no-repeat before:bg-cover before:bg-center before:z-[-1]">
        {children}
    </div>
  )
}

export default Bg