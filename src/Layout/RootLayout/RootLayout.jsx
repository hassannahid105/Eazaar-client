import { Outlet } from "react-router";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import TopSection from "../../pages/Home/Home/TopSection/TopSection";
import MegaToolbar from "../../component/MegaToolbar/MegaToolbar";

const RootLayout = () => {
  return (
    <div>
      <div className="">
        <div className="container mx-auto sm:px-0 lg:px-20 h-12">
          {/* <TopSection></TopSection> */}
        </div>
      </div>
      <div className=" mx-auto px-4 md:px-20">
        <div className="h-[48px] fixed top-0 z-50 bg-white shadow-md w-full md:w-0">
          <Navbar></Navbar>
        </div>
        {/* Mega tool bart */}
        <div className="h-[calc(100vh-48px)] my-6">
          <div className="">
            <MegaToolbar></MegaToolbar>
          </div>
          <div>
            <Outlet></Outlet>
          </div>
          <div className="">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
