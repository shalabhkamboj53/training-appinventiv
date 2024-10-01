import { HomeContext } from "../../context/homecontext";
import AsSeen from "./components/asseen";
import Cta from "./components/cta";
import Footer from "./components/footer";
import Guide from "./components/guide";
import HeroSection from "./components/hero-section";
import ProductListing from "./components/productlisting";
import ShopSpace from "./components/shopspace";
import Testimonials from "./components/testimonials";
import { TestimonialData, ProductList, AsSeenList, FooterData } from "../../utils/mock";
import FeatureProducts from "./components/featureproducts";
import ExclusiveProduct from "./components/exclusiveproduct";
import { useState } from "react";
import { ProductFeatureType, ProductType } from "../../utils/type";

const Home = () => {
  const [ExclusiveProductFeature, setExclusiveProductFeature] = useState<ProductFeatureType|null>(null);
  const [ExclusiveProductItem, setExclusiveProductItem] = useState<ProductType|null>(null);

  const value = {
    TestimonialData,
    ProductList,
    ExcusiveProductFeature: ExclusiveProductFeature,
    setExclusiveProductFeature,
    ExclusiveProductItem,
    setExclusiveProductItem,
    AsSeenList,
    FooterData
  };

  return (
    <HomeContext.Provider value={value}>
      <HeroSection />
      <Testimonials />
      <FeatureProducts />
      <ShopSpace />
      <Cta />
      <ProductListing />
      <ExclusiveProduct />
      <Guide />
      <AsSeen />
      <Footer />
    </HomeContext.Provider>
  );
};

export default Home;
