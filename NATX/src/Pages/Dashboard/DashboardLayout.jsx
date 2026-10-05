import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Dashboard/Sidebar";
import DashNav from "../../Components/Dashboard/DashNav";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen w-full bg-[var(--bg-primary)] font-space">
      <Sidebar />
      <main className="flex-1 lg:pl-64 flex flex-col">
        <DashNav />
        <div className="flex-1 p-6 sm:p-10 max-w-7xl mx-auto w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;