import BreakPointWrap from "../../../../components/breakpointwrap";
import FooterTop from "./footertop";
import FooterBottom from "./footerbottom";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#29412b] pt-20">
      <BreakPointWrap>
        <FooterTop />
      </BreakPointWrap>

      <hr className="border-[#495d4b]" />

      <BreakPointWrap>
        <FooterBottom />
      </BreakPointWrap>
    </div>
  );
};

export default Footer;
