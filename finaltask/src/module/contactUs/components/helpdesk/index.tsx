import { useContext } from "react";
import Card from "./card";
import { ContactContext } from "../../../../context/contactcontext";

const HelpDesk = () => {
  const { HelpDeskData } = useContext(ContactContext);
  return (
    <div className="py-14">
      <h2 className="text-center text-3xl font-semibold">
        Browse our help desk
      </h2>
      <div className="grid grid-cols-3 w-[80%] mx-auto gap-10 mt-14">
        {HelpDeskData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HelpDesk;
