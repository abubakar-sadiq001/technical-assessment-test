import { useState } from "react";
import MorePoints from "../components/MorePoints";
import Refer from "../components/Refer";
import RewardsJourney from "../components/RewardsJourney";
import SuccessModal from "../components/ui/SuccessModal";

function Rewards() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div>
      <div className="mb-10 flex cursor-pointer gap-2 text-[15px]">
        <button className="cursor-pointer rounded-tl-[10px] rounded-tr-[10px] border-b-2 border-[#901efe] bg-[rgba(144,_19,_254,_0.2)] px-4 py-4 text-[#901efe] hover:bg-[rgba(144,_19,_254,_0.2)]">
          Earn Point
        </button>
        <button className="cursor-pointer rounded-tl-[10px] rounded-tr-[10px] px-4 py-4 hover:bg-[rgba(144,_19,_254,_0.2)]">
          Redeem Rewards
        </button>
      </div>

      <RewardsJourney setShowConfetti={setShowConfetti} />

      <MorePoints />

      <Refer />

      {/* <div className="z-100 flex h-screen items-center justify-center"> */}
      <SuccessModal
        showConfetti={showConfetti}
        setShowConfetti={setShowConfetti}
      />
      {/* </div> */}
    </div>
  );
}

export default Rewards;
