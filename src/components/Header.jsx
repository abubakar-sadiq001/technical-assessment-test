import { useState } from "react";
import useReadNotif from "../lib/useReadNotif";
import { useUser } from "../lib/useUser";
import Notification from "./Notification";
import NotificationBox from "./ui/NotificationBox";
import NotificationModal from "./ui/NotificationModal";
import MediumScreenSidebar from "./MediumScreenSidebar";

function Header() {
  const [openBox, setOpenBox] = useState(false);
  const [openNotifModal, setOpenNotifModal] = useState(false);
  const [title, setTitle] = useState(null);
  const [notifMessage, setNotifMessage] = useState(null);
  const [showMediumSideBar, setShowMediumSideBar] = useState(false);

  const { user } = useUser();
  const { readUserNotif } = useReadNotif();

  function handleOpenNotification(id) {
    readUserNotif({ notifId: id, userId: user?.id });
    setOpenNotifModal(true);
  }

  return (
    <div className="sticky top-0 z-50 w-full items-center gap-5 bg-gray-50 px-5 py-7 shadow-[10px_2px_20px] shadow-[#e7e7e7]">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-3">
            <button
              className="hidden cursor-pointer max-[1199px]:block"
              onClick={() => {
                setShowMediumSideBar(true);
              }}
            >
              <img src="./hamburger.png" width={25} />
            </button>
            <h1 className="text-[25px]">Rewards Hub</h1>
          </div>
        </div>

        <Notification setOpenBox={setOpenBox} />

        {openBox && (
          <NotificationBox
            handleOpenNotification={handleOpenNotification}
            setNotifMessage={setNotifMessage}
            setTitle={setTitle}
          />
        )}

        {openNotifModal && (
          <NotificationModal
            openNotifModal={openNotifModal}
            setOpenNotifModal={setOpenNotifModal}
            bodyMessage={notifMessage}
            title={title}
          />
        )}
      </div>
      <p className="mt-3 text-gray-600">
        Earn points, unlock rewards, and celebrate your progress!
      </p>

      {showMediumSideBar && (
        <MediumScreenSidebar setShowMediumSideBar={setShowMediumSideBar} />
      )}
    </div>
  );
}

export default Header;
