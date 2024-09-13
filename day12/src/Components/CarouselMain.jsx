import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
};

const CarouselMain = ({logos}) => {
  return (
      <div className="py-8">
        <Carousel
          responsive={responsive}
          showDots={true}
          autoPlaySpeed={4000}
          infinite={true}
          swipeable={false}
          arrows={false}
          autoPlay={true}
        >
          {logos.map((logo, index) => {
            return (
              <div
                key={index}
                className="py-5 text-center border-2 mb-14 mx-5"
              >
                <img src={logo.url} alt={logo.name} />
              </div>
            );
          })}
        </Carousel>
      </div>
  );
};

export default CarouselMain;
