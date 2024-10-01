import React, { useContext } from "react"
import BreakPointWrap from "../../../../components/breakpointwrap"
import { HomeContext } from "../../../../context/homecontext"
import Card from "./card"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
};

const Testimonials: React.FC = () => {
    const {TestimonialData} = useContext(HomeContext)

    window.addEventListener('change', () => {
        console.log(window.innerWidth)
    })
    
  return (
        <div className="bg-[#f8f4e9] py-20">
            <BreakPointWrap>
                <div className="h-full z-10">
                    <h3>HEAR FROM OUR PLANT FAMILY</h3>
                    
                    <Carousel
                        responsive={responsive}
                        showDots={false}
                        autoPlaySpeed={4000}
                        infinite={true}
                        swipeable={true}
                        arrows={false}
                        autoPlay={true}
                    >
                            
                            {
                            TestimonialData.map((testimonial, index) => (
                                    <Card testimonial={testimonial} key={index} />
                            ))
                        }
                    </Carousel>
                </div>
            </BreakPointWrap>
        </div>
  )
}

export default Testimonials