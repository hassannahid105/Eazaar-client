import { Outlet } from "react-router";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import TopSection from "../../pages/Home/Home/TopSection/TopSection";
import MegaToolbar from "../../component/MegaToolbar/MegaToolbar";

const RootLayout = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto sm:px-0  lg:px-20">
          <TopSection></TopSection>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-20">
        <div className="">
          <Navbar></Navbar>
        </div>
        <div>
          <MegaToolbar></MegaToolbar>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <div className="">
        {/* */}
        <div className="">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
