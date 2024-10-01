import { useContext } from "react";
import Card from "./card";
import { ContactContext } from "../../../../context/contactcontext";

const OtherQuestions = () => {
  const { OtherQuestionsData } = useContext(ContactContext);
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10 mb-32">
      <div className="flex flex-col gap-3 items-center justify-center w-full mb-10">
        <h1 className="text-2xl lg:text-4xl text-black">
          Any other questions?
        </h1>
        <p className="text-black text-sm lg:text-lg px-5">
          We're here to help. You can contact us: Weekdays: 6am to 6pm PT,
          Weekends: 6am to 6pm PT.
        </p>
      </div>
      <div className="border rounded-xl grid grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4 py-10 mt-20">
        {OtherQuestionsData.map((ele, index: number) => (
          <>
            <Card
              key={index}
              ele={ele}
              className={`${
                OtherQuestionsData.length - 1 !== index ? "border-r" : ""
              }`}
            />
          </>
        ))}
      </div>
    </section>
  );
};

export default OtherQuestions;
