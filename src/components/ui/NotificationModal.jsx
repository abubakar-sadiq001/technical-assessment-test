import { useRef } from "react";
import { createPortal } from "react-dom";
import ModalContent from "../ModalContent";

function NotificationModal({ openNotifModal, setOpenNotifModal }) {
  const overlayRef = useRef(null);

  function handleClose() {
    setOpenNotifModal(false);
  }

  // Handle click on overlay only
  function handleOverlayClick(e) {
    if (overlayRef.current === e.target) {
      handleClose();
    }
  }

  if (openNotifModal != true) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-1000 flex items-center justify-center bg-black/40 backdrop-blur-[1px] transition-all"
      onClick={handleOverlayClick}
      ref={overlayRef}
    >
      <div className="relative my-12.5 w-full max-w-120 overflow-hidden rounded-lg bg-white text-center shadow-xl">
        <header className="flex items-center justify-between bg-amber-400 p-2">
          <h1 className="flex items-center gap-1">
            <ion-icon name="mail-outline" className="text-[23px]"></ion-icon>
            <span className="text-[16px] font-semibold">
              Daily Streak Reminder
            </span>
          </h1>

          <ion-icon
            name="close-outline"
            size="large"
            style={
              {
                // position: "absolute",
                // right: 15,
                // top: 10,
                // cursor: "pointer",
                // color: "gray",
              }
            }
            className="flex justify-center text-green-400"
            onClick={handleClose}
          ></ion-icon>
        </header>
        {/* CONTENT */}
        <ModalContent />
      </div>
    </div>,
    document.body,
  );
}

export default NotificationModal;
