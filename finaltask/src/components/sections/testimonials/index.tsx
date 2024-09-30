import BreakPointWrap from "../../breakpointwrap"

const Testimonials = () => {
    const testimonials =[
        {
            name: "Rober Smith",
            product: "Monstera deliciosa",
            message: "I absolutely love my Monstera deliciosa! This plant is a true showstopper with its large, vibrant green leaves and unique holey patterns. It adds a touch of tropical elegance to my living room and never fails to impress my guests.",
            img: "/testimonials/test-avt1.avif",
            stars: 5
        },
        {
            name: "Rober Smith",
            product: "Monstera deliciosa",
            message: "I absolutely love my Monstera deliciosa! This plant is a true showstopper with its large, vibrant green leaves and unique holey patterns. It adds a touch of tropical elegance to my living room and never fails to impress my guests.",
            img: "/testimonials/test-avt1.avif",
            stars: 5
        },
        {
            name: "Rober Smith",
            product: "Monstera deliciosa",
            message: "I absolutely love my Monstera deliciosa! This plant is a true showstopper with its large, vibrant green leaves and unique holey patterns. It adds a touch of tropical elegance to my living room and never fails to impress my guests.",
            img: "/testimonials/test-avt1.avif",
            stars: 5
        },
    ]
    
  return (
        <div className="bg-[#f8f4e9] py-20">
            <BreakPointWrap>
                <div className="h-full z-10">
                    <h3>HEAR FROM OUR PLANT FAMILY</h3>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                        {
                            testimonials.map((testimonial, index) => (
                                <div key={index} className="mt-10">
                                    <div>
                                        {
                                            Array.from({length: testimonial.stars}, (_, index) => (
                                                <i className="bi bi-star-fill text-[#4ca886]" key={index}></i>
                                            ))
                                        }
                                    </div>
                                    <h3 className="mt-5 text-xl">{testimonial.product}</h3>
                                    <p className="font-thin text-sm my-3">"{testimonial.message}"</p>
                                    <div className="flex items-center">
                                        <img src={testimonial.img} alt="testimonial" className="rounded-full w-20 h-20" />
                                        <div className="ms-4">
                                            <h4>{testimonial.name}</h4>
                                            <p className="text-sm font-light">Purchased Item: {testimonial.product}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </BreakPointWrap>
        </div>
  )
}

export default Testimonials