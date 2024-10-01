import { useEffect } from "react";
import { FaqDataType } from "../../../../utils/type";

interface QuestionBoxProps {
    faq: FaqDataType;
    index: number;
    isOpen: number;
    setIsOpen: (index: number) => void;
  }
  
  const QuestionBox = ({ faq, index, setIsOpen, isOpen }: QuestionBoxProps) => {
    useEffect(() => {
      if(index === 0) {
        setIsOpen(0)
      }
    }, [index, setIsOpen])
  
    const toggleFAQ = (index: number) => {
      setIsOpen(isOpen === index ? -1 : index);
    };
  
    return (
      <div
        className={`pb-4 p-4 lg:p-8`}
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(index)}
        >
          <p className="text-lg lg:text-2xl text-gray-600 cursor-pointer hover:text-black">
            {faq.que}
          </p>
          <button className="border border-gray-400 rounded-full p-1 lg:p-2 px-2 lg:px-3 hover:bg-purple-200 hover:text-black transition-colors duration-300 hover:border-transparent">
            {isOpen === index ? (
              <i className="bi bi-chevron-up"></i>
            ) : (
              <i className="bi bi-chevron-down"></i>
            )}
          </button>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isOpen === index ? "max-h-5<6" : "max-h-0"
          }`}
        >
          <p className="mt-5 text-gray-600">{faq.ans}</p>
        </div>
      </div>
    );
  };

  export default QuestionBox;