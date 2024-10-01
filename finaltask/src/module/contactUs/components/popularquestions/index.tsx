import { useContext, useState } from "react";
import QuestionBox from "./questionbox";
import { ContactContext } from "../../../../context/contactcontext";

const PopularQuestions = () => {
  const [isOpen, setIsOpen] = useState<number>(0);
  const { FaqData } = useContext(ContactContext);

  return (
    <section className="bg-[#e0e0ff] w-full py-20 mb-20 px-4">
      <div className="text-center mb-10 w-full">
        <h1 className="text-2xl lg:text-4xl text-black">
          Popular Searched Questions
        </h1>
      </div>
      <div className="p-4 max-w-7xl mx-auto border rounded-2xl bg-white">
        {FaqData.map((faq, index: number) => (
          <>
            <QuestionBox
              key={index}
              faq={faq}
              index={index}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            {index !== FaqData.length - 1 && <hr />}
          </>
        ))}
      </div>
    </section>
  );
};

export default PopularQuestions;
