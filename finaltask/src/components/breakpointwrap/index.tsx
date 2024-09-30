import React from "react"

const BreakPointWrap = ({children} : {children:React.ReactNode}) => {
  return (
    <div className="w-[95%] xl:w-[75%] 2xl:w-[67%] mx-auto h-full">{children}</div>
  )
}

export default BreakPointWrap