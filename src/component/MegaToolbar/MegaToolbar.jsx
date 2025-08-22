import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
const MegaToolbar = () => {
  return (
    // ! TODO: Mega Toolbar workin processing.......
    <div className="md:grid md:grid-cols-12 gap-2 md:gap-8 my-2  items-center">
      <div className="hidden md:col-span-3 border-2  md:flex items-center justify-between text-white bg-main py-2 px-4 min-w-full mb-2 md:mb-0">
        <p>
          <RxHamburgerMenu size={32} />
        </p>
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className=" m-1">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-medium">All Categories</span>{" "}
              <IoIosArrowDown size={24} className="mt-2" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-black mt-4"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:col-span-6 ">
        <form className=" mx-auto">
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-black bg-gray-50 rounded-e-lg border-s-gray-200  border border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-s-gray-200  dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:border-blue-500 py-4"
                placeholder="Search Mockups, Logos, Design Templates..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-main rounded-e-lg border border-blue-700 hover:bg-main focus:ring-4 focus:outline-none focus:ring-skydeep dark:bg-main dark:hover:bg-skydeep dark:focus:ring-skydeep"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className=" hidden md:col-span-3 border-2 border-gray-200 md:flex items-center justify-center flex-col mt-2 md:mt-0">
        <p className="text-skydeep text-lg  uppercase font-bold">
          black friday
        </p>
        <span className="text-gray">Get 45% off!</span>
      </div>
    </div>
  );
};

export default MegaToolbar;
