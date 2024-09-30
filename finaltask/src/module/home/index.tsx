import Cta from "../../components/sections/cta"
import Footer from "../../components/footer"
import HeroSection from "../../components/sections/hero-section"
import ProductDisplay from "../../components/sections/productdisplay"
import ProductListing from "../../components/sections/productlisting"
import ShopSpace from "../../components/sections/shopspace"
import Testimonials from "../../components/sections/testimonials"
import AsSeen from "../../components/sections/asseen"
import Guide from "../../components/sections/guide"
import BuyProduct from "../../components/sections/buyproduct"

const Home = () => {
  return (
    <div>
        <HeroSection />
        <Testimonials />
        <ProductDisplay />
        <ShopSpace />
        <Cta />
        <ProductListing />
        <BuyProduct />
        <Guide />
        <AsSeen />
        <Footer />
    </div>
  )
}

export default Home