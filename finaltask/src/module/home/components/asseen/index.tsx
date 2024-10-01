import { useContext } from "react";
import BreakPointWrap from "../../../../components/breakpointwrap";
import { HomeContext } from "../../../../context/homecontext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
  },
};

const AsSeen = () => {
  const { AsSeenList } = useContext(HomeContext);
  return (
    <div className="py-14">
      <BreakPointWrap>
        <div>
          <h3 className="text-3xl text-center">AS SEEN IN</h3>
          <div className="mt-14">
            <Carousel
              responsive={responsive}
              showDots={false}
              autoPlaySpeed={4000}
              infinite={true}
              swipeable={true}
              arrows={false}
              autoPlay={true}
            >
              {AsSeenList.map((item, index) => (
                <div key={index} className="flex justify-center items-center px-14">
                  <img src={item.img} alt={item.alt} className="w-[80%]" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </BreakPointWrap>
    </div>
  );
};

export default AsSeen;
