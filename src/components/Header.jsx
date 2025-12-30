import NotificationBox from "./ui/NotificationBox";
import Notification from "./Notification";
import { useState } from "react";
import NotificationModal from "./ui/NotificationModal";
import { useUser } from "../lib/useUser";
import useReadNotif from "../lib/useReadNotif";

function Header() {
  const [openBox, setOpenBox] = useState(false);
  const [openNotifModal, setOpenNotifModal] = useState(false);
  const [notifId, setNotifId] = useState(null);

  const { user } = useUser();
  const { readUserNotif, isReading } = useReadNotif();

  function handleOpenNotification(id) {
    readUserNotif({ notifId: id, userId: user?.id });
    setOpenNotifModal(true);
    console.log(id);
  }

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

      {openBox && (
        <NotificationBox handleOpenNotification={handleOpenNotification} />
      )}

      {openNotifModal && (
        <NotificationModal
          openNotifModal={openNotifModal}
          setOpenNotifModal={setOpenNotifModal}
        />
      )}
    </div>
  );
}

export default Header;
