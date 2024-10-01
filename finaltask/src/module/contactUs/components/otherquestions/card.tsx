interface CardProps {
  ele: {
    img: string;
    title: string;
    desc: string;
  };
  className: string;
}

const Card = ({ ele, className }: CardProps) => {
  return (
    <div
      className={`flex flex-col gap-3 items-center justify-center w-full ${className}`}
    >
      <img
        src={ele?.img}
        alt="img"
        className="w-10 h-10 lg:w-16 lg:h-16 object-cover"
      />
      <h2 className="text-black text-2xl lg:text-3xl">{ele?.title}</h2>
      <h5 className="text-black underline hover:text-red-500 lg:text-xl">
        {ele?.desc}
      </h5>
    </div>
  );
};

export default Card;
