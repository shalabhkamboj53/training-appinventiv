import Footertop from "./footertop";

const Footer = () => {
  return (
    <div className="border-t-2">
      <div className="w-full lg:max-w-[75%] lg:mx-auto px-4 mt-10 mb-5">
        <Footertop />
        <div className="lg:flex gap-2 items-center justify-between w-full border-t pt-2">
          <div>
            <p className="text-sm text-gray-600">
              © 2024 EComposer Store. All Rights Reserved.
            </p>
          </div>
          <div className="mt-3 lg:mt-0">
            <img
              src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-ZTbOOI3C6atrust-hc.png?v=1724641892"
              alt="img"
              className="w-full h-auto lg:h-8 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
