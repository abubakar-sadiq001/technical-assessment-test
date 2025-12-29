import NotificationBox from "./ui/NotificationBox";
import Notification from "./Notification";
import { useState } from "react";

function Header() {
  const [openBox, setOpenBox] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-between bg-gray-50 px-5 py-7 shadow-[0px_2px_20px] shadow-[#e7e7e7]">
      <div>
        <div className="flex items-center gap-3">
          <div className="hidden max-[1199px]:block">
            <ion-icon name="menu-outline" size="large"></ion-icon>
          </div>
          <h1 className="text-[25px]">Rewards Hub</h1>
        </div>
        <p className="text-gray-600">
          Earn points, unlock rewards, and celebrate your progress!
        </p>
      </div>

      <Notification setOpenBox={setOpenBox} />

      {openBox && <NotificationBox />}
    </div>
  );
}

export default Header;
