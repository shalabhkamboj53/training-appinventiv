import BreakPointWrap from "../breakpointwrap"

const Footer = () => {
  return (
    <div className="bg-[#29412b] pt-20">
        <BreakPointWrap>
            <div className="pb-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-white">
                <div className="mb-10">
                    <h4>COMPANY</h4>
                    <ul className="text-sm">
                        <li className="mb-3 mt-5">
                            About
                        </li>
                        <li className="mb-3">
                            Careers
                        </li>
                        <li className="mb-3">
                            Corporate Gifting
                        </li>
                        <li className="mb-3">
                            Trade Program
                        </li>
                        <li className="mb-3">
                            Refer a Friend
                        </li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h4>SUPPORT</h4>
                    <ul className="text-sm">
                        <li className="mb-3 mt-5">
                            Help + FAQs
                        </li>
                        <li className="mb-3">
                            Track Your Order
                        </li>
                        <li className="mb-3">
                            Shipping
                        </li>
                        <li className="mb-3">
                            Returns
                        </li>
                        <li className="mb-3">
                            Contact Support
                        </li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h4>RESOURCES</h4>
                    <ul className="text-sm">
                        <li className="mb-3 mt-5">
                            Find Your Plant
                        </li>
                        <li className="mb-3">
                            Plant Care Library
                        </li>
                        <li className="mb-3">
                            Blog
                        </li>
                        <li className="mb-3">
                            Free Online Course
                        </li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h4 className="text-3xl mb-5">Get the Dirt.</h4>
                    <p className="mb-8 text-sm">Get plant care tips, exclusive offers, & event invites straight to your inbox.</p>
                    <div className="relative">
                        <input type="text" placeholder="Email address" className="py-3 input input-ghost border-[1px] border-white rounded-none w-full" name="" id="" />
                        <i className="bi bi-arrow-up-right absolute right-4 top-2 text-2xl"></i>
                    </div>
                </div>
            </div>
        </BreakPointWrap>
            <hr className="border-[#495d4b]" />
        <BreakPointWrap>
            <div className="pt-5 grid grid-cols-1 md:grid-cols-3 text-white text-xs">
                <div className="mb-5">
                    <ul className="flex gap-5 items-center h-full md:justify-start justify-center">
                        <li>Terms</li>
                        <li>Privacy Policy</li>
                        <li>Accessbility</li>
                    </ul>
                </div>
                <div className="mb-5">
                    <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/pay-m.svg?v=1677899548" className="mx-auto" alt="" />
                </div>
                <div className="mb-5">
                    <ul className="flex md:justify-end justify-center h-full items-center gap-10 text-xl">
                        <li>
                            <i className="bi bi-facebook"></i>
                        </li>
                        <li>
                            <i className="bi bi-twitter-x"></i>
                        </li>
                        <li>
                            <i className="bi bi-instagram"></i>
                        </li>
                        <li>
                            <i className="bi bi-telegram"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </BreakPointWrap>
    </div>
  )
}

export default Footer