import React from "react"
import BreakPointWrap from "../../../../components/breakpointwrap"
import GreenBtn from "../../../../components/greenbtn"
import Bg from "./bg"

const HeroSection: React.FC = () => {
  return (
        <Bg>
            <BreakPointWrap>
                <div className="grid md:grid-cols-2 grid-cols-1 h-full">
                    <div className="col-span-1 md:order-1 order-2 flex justify-center items-center py-20 md:py-auto px-10 md:px-auto">
                        <div className="text-center md:text-left">
                            <h2 className="xl:text-6xl lg:text-4xl text-2xl mb-5">PLANT GIFTS FOR EVERY MOM</h2>
                            <p className="mb-8">Send mom a gift that keeps on growing.</p>
                            <GreenBtn>SHOP COLLECTION</GreenBtn>
                        </div>
                    </div>
                    <div className="md:order-2 order-1 h-full flex justify-center items-end mt-10 md:mt-auto">
                        <div className="relative mx-auto">
                            <img src="/bg-img-layer-hero.png" alt="hero-img" className="w-[80%] left-[10%] absolute z-[-1] bottom-0" />
                            <img src="/plant-hero.webp" alt="" className="w-full" />
                        </div>
                    </div>
                </div>
            </BreakPointWrap>
        </Bg>
  )
}

export default HeroSection