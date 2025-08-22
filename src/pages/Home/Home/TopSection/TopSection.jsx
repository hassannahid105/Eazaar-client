import { FaShippingFast } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { FaFacebookF, FaSquareInstagram, FaTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router";
const TopSection = () => {
  return (
    <div className=" hidden md:flex items-center justify-between py-2 bg-gray-100">
      <div className="flex gap-4 items-center justify-center">
        <div className="flex gap-6 border-r-[1px] pr-6 border-gray-300 items-center justify-center">
          <div>
            <FaShippingFast size={24} />
          </div>
          <p>Free Delivery</p>
        </div>

        <div className="flex gap-6 border-r-[1px] pr-6 border-gray-300 items-center justify-center">
          <div>
            <TiWorld size={24} />
          </div>
          <p>Returns Policy</p>
        </div>
      </div>
      <div className="flex gap-6 items-center justify-center">
        <p>Follow Us</p>
        <div className="flex gap-6  items-center justify-center">
          <div>
            <Link to="https://www.facebook.com/SwapDeal.shop" target="_blank">
              <FaFacebookF size={18} />
            </Link>
          </div>
          {/* TODO: instagram, twitter and tiktok link add later */}
          <FaSquareInstagram size={18} />
          <FaTwitter size={18} /> <FaTiktok size={18} />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
