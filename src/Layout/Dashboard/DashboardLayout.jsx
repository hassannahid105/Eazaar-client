import DashboardHearder from "../../component/DashboardHearder/DashboardHearder";
import DashboardNav from "../../component/DashboardNav/DashboardNav";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className=" mb-96 p-4">
      <div className="w-full ">
        <DashboardHearder></DashboardHearder>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-2 hidden md:block ">
          <DashboardNav></DashboardNav>
        </div>
        <div className="col-span-10 ">
          <Outlet></Outlet>
        </div>
      </div>
      <div>footer dashboard</div>
    </div>
  );
};

export default DashboardLayout;
