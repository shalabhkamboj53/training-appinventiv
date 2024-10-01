import React from "react";
import { TestimonialType } from "../../../../utils/type";

interface CardProps {
  testimonial: TestimonialType;
}

const Card: React.FC<CardProps> = ({testimonial}) => {
  return (
    <div className="mt-10 px-10">
      <div>
        {Array.from({ length: testimonial.stars }, (_, index) => (
          <i className="bi bi-star-fill text-[#4ca886]" key={index}></i>
        ))}
      </div>
      <h3 className="mt-5 text-xl">{testimonial.product}</h3>
      <p className="font-thin text-sm my-3">"{testimonial.message}"</p>
      <div className="flex items-center">
        <img
          src={testimonial.img}
          alt="testimonial"
          className="rounded-full w-20 h-20"
        />
        <div className="ms-4">
          <h4>{testimonial.name}</h4>
          <p className="text-sm font-light">
            Purchased Item: {testimonial.product}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
