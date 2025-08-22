import { Link } from "react-router";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import useAuth from "../../hooks/useAuth";
const DashboardHearder = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="p-4 md:grid grid-cols-12 items-center pt-3 md:mt-8">
      <div className="flex items-center gap-2  col-span-2">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <div>
          <p className="text-sm font-bold">{user?.displayName} Hassan Nahid</p>
          <p className="text-sm">{user?.email}</p>
        </div>
      </div>
      <div className="col-span-3 md:ml-6 mt-2">
        <Link
          to={"/"}
          className="text-3xl font-bold tracking-wider text-skydeep opacity-50"
        >
          Eazaar
          <span className="font-bold text-4xl tracking-normal text-main">
            .
          </span>
        </Link>
      </div>
      <div className="col-span-4">
        <label className="input w-full border-none focus:border-none">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className=" col-span-3">
        <div className="flex items-center md:justify-center gap-6 mt-3">
          <IoMdNotificationsOutline size={24} />
          <MdOutlineForwardToInbox size={24} />
          <TiHomeOutline size={24} />
        </div>
      </div>
    </div>
  );
};

export default DashboardHearder;
