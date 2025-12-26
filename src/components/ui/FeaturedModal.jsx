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
      <div className="relative mx-3 my-12.5 w-full max-w-[500px] overflow-hidden rounded-lg bg-white p-6 shadow-xl">
        <ion-icon
          name="close-outline"
          size="large"
          style={{
            position: "absolute",
            right: 15,
            top: 10,
            cursor: "pointer",
            color: "gray",
          }}
          onClick={handleClose}
        ></ion-icon>

        <FeaturedModalContents />
      </div>
    </div>,
    document.body,
  );
}

export default SuccessModal;
