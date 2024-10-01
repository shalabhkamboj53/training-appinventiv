import { ReactNodeChildren } from "../../../../utils/type"

const Bg = ({children, className}:ReactNodeChildren) => {
  return (
    <div className={`relative overflow-hidden w-full before:bg-[url('https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-2RgmJOxbvBbg-hr-search.png')] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:content-[''] before:z-[-1] before:bg-no-repeat before:blur-[8px] before:bg-cover before:bg-center ${className}`}>
        {children}
    </div>
  )
}

export default Bg