import Confetti from "react-confetti";
import { createPortal } from "react-dom";

function SuccessModal({ showConfetti, setShowConfetti }) {
  function handleClose() {
    setShowConfetti(false);
  }

  if (showConfetti != true) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-1000 flex items-center justify-center bg-black/40 backdrop-blur-[1px] transition-all"
      // onClick={handleClose}
    >
      <div className="relative my-12.5 w-full max-w-85 overflow-hidden rounded-lg bg-white p-6 text-center shadow-xl">
        <Confetti width={350} numberOfPieces={100} />
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

        <div className="flex justify-center">
          <img src="./approve.png" width={150} />
        </div>

        <h1 className="text-[22px] font-semibold text-[#901efe]">
          Level Up! 🎉
        </h1>

        <h1 className="my-3 text-4xl font-bold text-purple-600">+5 Points</h1>

        <p>✨ 💎 🎯</p>

        <p className="mt-2 mb-6 text-[14px]">
          You've claimed your daily points! Come back tomorrow
        </p>
      </div>
    </div>,
    document.body,
  );
}

export default SuccessModal;

// import { useState } from "react";
// import { createPortal } from "react-dom";

// function SuccessModal() {
//   return createPortal(
//     <div className="fixed inset-0 z-[1000] flex max-w-75 items-center justify-center rounded-lg bg-black/40 px-5 py-2 backdrop-blur-[2.5px] transition-all">
//       <div className="relative overflow-y-scroll bg-yellow-400 p-6 shadow-xl">
//         <Confetti className="h-full w-[300]" />
//         //{" "}
//         <ion-icon
//           name="close-outline"
//           size="large"
//           style={{
//             position: "absolute",
//             right: 10,
//             cursor: "pointer",
//           }}
//         ></ion-icon>
//         <div className="flex justify-center">
//           <img src="./approve.png" width={150} />
//         </div>
//         <h1 className="text-[22px] font-semibold text-[#901efe]">
//           Level Up! 🎉
//         </h1>
//         <h1 className="my-3 text-4xl font-bold text-purple-600">+5 Points</h1>
//         <p>✨ 💎 🎯</p>
//         <p className="mt-2 mb-6 text-[14px]">
//           You've claimed your daily points! Come back tomorrow
//         </p>
//       </div>
//     </div>,
//     document.body,
//   );
// }

// export default SuccessModal;
