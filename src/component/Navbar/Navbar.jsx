import { Link, NavLink } from "react-router";
import { FaRegUserCircle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  // ? nav options for mobile and desktop
  const navOptions = (
    <>
      <li className="text-sm font-semibold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500 hover:text-blue-300"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-sm font-semibold">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500 hover:text-blue-300"
              : ""
          }
        >
          Dashboard
        </NavLink>
      </li>

      <li className="text-sm font-semibold">
        <NavLink
          to="/shop"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500 hover:text-blue-300"
              : ""
          }
        >
          Shop
        </NavLink>
      </li>
      <li className="text-sm font-semibold">
        <NavLink
          to="/test"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500 hover:text-blue-300"
              : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li className="text-sm font-semibold">
        <NavLink
          to="/test"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500 hover:text-blue-300"
              : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  const handleLogout = () => {
    logOut()
      .then(() => {
        // sign out successful
      })
      .catch((error) => {
        // an error happened
        console.log(error);
      });
  };
  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <Link to={"/"} className="text-3xl font-bold tracking-wider">
            Eazaar
            <span className="font-bold text-4xl tracking-normal text-main">
              .
            </span>
          </Link>
        </div>
        {/* desktop nav options */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  hover:none">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    // * TODO: CHANGE PROFILE PICTURE LATER
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <p className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </p>
                </li>
                <li>
                  <p>Settings</p>
                </li>
                <li onClick={handleLogout}>
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/register"
              className="flex justify-center items-center gap-1"
            >
              <FaRegUserCircle size={24} /> Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

<Link to={"/"} className="text-3xl font-bold tracking-wider">
  Eazaar
  <span className="font-bold text-4xl tracking-normal text-main">.</span>
</Link>;
