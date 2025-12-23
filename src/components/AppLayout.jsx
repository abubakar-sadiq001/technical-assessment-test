import { Outlet } from "react-router";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="flex">
      <SideBar />

      <div className="flex-1 border-l-5">
        <Header />
        <main className="bg-gray-50 px-4 py-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
