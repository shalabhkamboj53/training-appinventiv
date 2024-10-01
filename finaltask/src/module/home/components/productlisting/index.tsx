import { useContext } from "react";
import BreakPointWrap from "../../../../components/breakpointwrap";
import { HomeContext } from "../../../../context/homecontext";
import Card from "./card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './styles.css'

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
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
  },
};

const ProductListing = () => {
  const { ProductList } = useContext(HomeContext);
  const newProducts = ProductList.filter((product) => product.isNew);

  return (
    <div className="py-14">
      <BreakPointWrap>
        <div className="text-center">
          <h3 className="text-3xl">HEAR FROM OUR PLANT FAMILY</h3>
          <div className="mt-16 product_listing_carousel_container">
            <Carousel
              responsive={responsive}
              showDots={false}
              autoPlaySpeed={4000}
              infinite={true}
              swipeable={true}
              arrows={true}
              autoPlay={true}
            >
              {newProducts.map((product, index) => (
                <div key={index}>
                    <Card product={product} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </BreakPointWrap>
    </div>
  );
};

export default ProductListing;
