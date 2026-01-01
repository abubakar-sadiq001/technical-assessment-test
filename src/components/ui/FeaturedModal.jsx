import { useRef } from "react";
import { createPortal } from "react-dom";
import FeaturedModalContents from "./FeaturedModalContents";

function SuccessModal({ showFeaturedModal, setShowFeaturedModal }) {
  const overlayRef = useRef(null);

  function handleClose() {
    setShowFeaturedModal(false);
  }

  // Handle click on overlay only
  function handleOverlayClick(e) {
    if (overlayRef.current === e.target) {
      handleClose();
    }
  }

  if (showFeaturedModal != true) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-1000 flex items-center justify-center bg-black/40 backdrop-blur-[1px] transition-all"
      onClick={handleOverlayClick}
      ref={overlayRef}
    >
      <div className="relative mx-3 my-12.5 w-full max-w-[500px] overflow-hidden rounded-lg bg-white px-6 py-4 shadow-xl">
        <div className="flex justify-end">
          <ion-icon
            name="close-outline"
            onClick={handleClose}
            className="cursor-pointer rounded-lg p-1 text-[25px] text-gray-500 hover:bg-gray-200 hover:text-black"
          ></ion-icon>
        </div>

        <FeaturedModalContents />
      </div>
    </div>,
    document.body,
  );
}

export default SuccessModal;
