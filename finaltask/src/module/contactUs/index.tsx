import { ContactContext } from "../../context/contactcontext";
import { ContactFooterData, FaqData, HelpDeskData, OtherQuestionsData } from "../../utils/mock";
import Footer from "./components/footer";
import HelpDesk from "./components/helpdesk";
import HeroSection from "./components/hero-section";
import OtherQuestions from "./components/otherquestions";
import PopularQuestions from "./components/popularquestions";

const ContactUs = () => {

  const value = {
    HelpDeskData,
    FaqData,
    OtherQuestionsData,
    ContactFooterData
  }

  return (
    <ContactContext.Provider value={value}>
     <HeroSection />
     <HelpDesk />
     <PopularQuestions />
     <OtherQuestions />
     <Footer />
    </ContactContext.Provider>
  );
};

export default ContactUs;