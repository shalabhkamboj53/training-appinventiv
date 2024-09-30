import React from 'react'

const GreenBtn = ({children, className, action}: {children:React.ReactNode, className?: string, action?: () => void}) => {
    if(action){
        return (
            <button onClick={action} className={`${className} btn rounded-none px-8 py-5 text-white h-auto bg-[#4ca886] border-none`}>{children}</button>
        )
    } else {
        return (
            <button className={`${className} btn rounded-none px-8 py-5 text-white h-auto bg-[#4ca886] border-none`}>{children}</button>
        )
    }
}

export default GreenBtn