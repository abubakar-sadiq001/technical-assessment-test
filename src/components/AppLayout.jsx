import { Outlet } from "react-router";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="flex">
      <SideBar />

      <div className="border-l-5 flex-1">
        <Header />
        <main className="bg-green-400 px-4 my-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
