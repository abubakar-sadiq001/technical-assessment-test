import { useRef } from "react";
import { createPortal } from "react-dom";
import ModalContent from "../ModalContent";

function NotificationModal({
  openNotifModal,
  setOpenNotifModal,
  bodyMessage,
  title,
}) {
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
      <div className="relative mx-3 my-12.5 w-full max-w-120 overflow-hidden rounded-lg bg-white text-center shadow-xl">
        <header className="flex items-center justify-between bg-gray-100 p-2">
          <h1 className="flex items-center gap-1">
            <ion-icon name="mail-outline" className="text-[20px]"></ion-icon>
            <span className="text-[18px] font-semibold text-gray-900">
              {title}
            </span>
          </h1>

          <ion-icon
            name="close-outline"
            className="cursor-pointer rounded-lg p-1 text-[25px] text-gray-500 hover:bg-gray-200 hover:text-black"
            onClick={handleClose}
          ></ion-icon>
        </header>
        {/* CONTENT */}
        <ModalContent bodyMessage={bodyMessage} />
      </div>
    </div>,
    document.body,
  );
}

export default NotificationModal;
