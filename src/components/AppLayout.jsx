import { Outlet } from "react-router";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="flex">
      {/* <div className="fixed right-0 left-0 z-100 flex h-screen items-center justify-center">
        // <SuccessModal />
      </div> */}

      <SideBar />

      <div className="flex-1 border-l border-[#E9D4FF]">
        <Header />
        <main className="bg-gray-50 px-4 py-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
