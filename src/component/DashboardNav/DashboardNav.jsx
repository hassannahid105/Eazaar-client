import { TiHomeOutline } from "react-icons/ti";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { AiFillAmazonSquare } from "react-icons/ai";
import { IoBagAddOutline } from "react-icons/io5";
import { Link } from "react-router";
import { AiOutlineProduct } from "react-icons/ai";
const DashboardNav = () => {
  return (
    <div className="">
      <ul className="">
        <div>
          <Link to="/dashboard">
            <li className="hover:bg-gray py-2 font-semibold flex items-center  gap-2 pl-6">
              <TiHomeOutline size={24} />
              Dashboard
            </li>
          </Link>
        </div>
        <li className="hover:bg-gray py-2 font-semibold flex items-center  gap-2 pl-6">
          <MdOutlineForwardToInbox size={24} />
          Page Layouts
        </li>
        <li className="hover:bg-gray py-2 font-semibold flex items-center  gap-2 pl-6">
          <AiFillAmazonSquare size={24} />
          Email
        </li>
        <div>
          <Link to="/dashboard/products">
            <li className="hover:bg-gray py-2 font-semibold flex items-center  gap-2 pl-6">
              <AiOutlineProduct />
              Products
            </li>
          </Link>
        </div>
        <div>
          <Link to="/dashboard/addproduct">
            <li className="hover:bg-gray py-2 font-semibold flex items-center  gap-2 pl-6">
              <IoBagAddOutline />
              Product Add
            </li>
          </Link>
        </div>
        <li className=" py-2 font-semibold flex items-center  gap-2 pl-6">
          error
        </li>
        <li className=" py-2 font-semibold flex items-center  gap-2 pl-6">
          Maps
        </li>
      </ul>
    </div>
  );
};

export default DashboardNav;
