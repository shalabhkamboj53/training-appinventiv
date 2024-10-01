import Bg from "./bg";

const HeroSection = () => {
  return (
    <div>
      <Bg className="h-[64vh]">
        <div className="flex justify-center items-center h-full w-full">
          <div className="text-center text-white w-full">
            <h2 className="text-5xl font-semibold">HELP CENTER</h2>
            <p className="mt-5 text-lg">Let us know how we may help you?</p>
            <div className="relative mt-10 xl:w-[40%] md:w-[60%] w-[80%] mx-auto">
              <input
                type="text"
                placeholder="Search for answers..."
                className="input rounded-full w-full py-5 pe-36 ps-5 input-bordered bg-white h-auto text-gray-400"
              />
              <button className="btn py-[1.3rem] h-auto rounded-full absolute right-2 px-10 top-1 hover:bg-gray-300 text-white hover:text-black border-none">
                Search
              </button>
            </div>
          </div>
        </div>
      </Bg>

      <div className="">
        <div className="grid sm:grid-cols-2 grid-cols-1 lg:w-[50%] md:w-[75%] w-[95%] mt-[-90px] gap-8 mx-auto">
          <div className="py-8 px-10 bg-white rounded-2xl border-[1px] border-[#d8d8d8] text-center">
            <i className="bi bi-geo-alt text-4xl text-[#ff5252]"></i>
            <h4 className="text-xl mt-3">Order Tracking</h4>
            <p className="mt-2">Log in to check the status of your order</p>
            <button className="btn text-white mt-5 rounded-full px-8">
              Track your Order<i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="py-8 px-10 bg-white rounded-2xl border-[1px] border-[#d8d8d8] text-center">
            <i className="bi bi-box text-4xl text-[#ff5252]"></i>
            <h4 className="text-xl mt-3">Return & Exchange</h4>
            <p className="mt-2">
              We make it easy to return and exchange styles.
            </p>
            <button className="btn text-white mt-5 rounded-full px-8">
              Start a Return<i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
