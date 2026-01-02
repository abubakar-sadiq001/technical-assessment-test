import { useRef } from "react";
import { createPortal } from "react-dom";
import Success from "./Success";

function SuccessModal({ showSuccessModal, setShowSuccessModal }) {
  const overlayRef = useRef(null);

  function handleClose() {
    setShowSuccessModal(false);
  }

  // Handle click on overlay only
  function handleOverlayClick(e) {
    if (overlayRef.current === e.target) {
      handleClose();
    }
  }

  if (showSuccessModal != true) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-1000 flex items-center justify-center bg-black/40 backdrop-blur-[1px] transition-all"
      onClick={handleOverlayClick}
      ref={overlayRef}
    >
      <div className="relative mx-4 my-12.5 w-full max-w-85 overflow-hidden rounded-lg bg-white p-6 text-center shadow-xl">
        <ion-icon
          name="close-outline"
          size="large"
          className="cursor-pointer rounded-lg p-1 text-[25px] text-gray-500 hover:bg-gray-200 hover:text-black"
          style={{
            position: "absolute",
            right: 15,
            top: 10,
          }}
          onClick={handleClose}
        ></ion-icon>

        <Success />
      </div>
    </div>,
    document.body,
  );
}

export default SuccessModal;
