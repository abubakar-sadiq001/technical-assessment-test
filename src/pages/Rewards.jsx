import { useState } from "react";
import MorePoints from "../components/MorePoints";
import Refer from "../components/Refer";
import RewardsJourney from "../components/RewardsJourney";
import SuccessModal from "../components/ui/SuccessModal";
import FeaturedModal from "../components/ui/FeaturedModal";
import Redeem from "../components/Redeem";

function Rewards() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFeaturedModal, setShowFeaturedModal] = useState(false);
  const [tabName, setTabName] = useState("earnPoint");

  return (
    <div>
      <div className="mb-10 flex cursor-pointer gap-2 text-[15px]">
        <button
          className={`cursor-pointer rounded-tl-[10px] rounded-tr-[10px] px-4 py-4 ${tabName === "earnPoint" ? " cursor-no-drop border-b-2 border-[#901efe] bg-[rgba(144,19,254,0.2)] text-[#901efe] " : "cursor-pointer text-gray-500 hover:bg-[rgba(144,19,254,0.1)]"}`}
          onClick={() => setTabName("earnPoint")}
        >
          Earn Point
        </button>
        <button
          className={`cursor-pointer rounded-tl-[10px] rounded-tr-[10px] px-4 py-4 ${tabName === "rewards" ? " cursor-no-drop border-b-2 border-[#901efe] bg-[rgba(144,19,254,0.2)] text-[#901efe] " : "cursor-pointer text-gray-500 hover:bg-[rgba(144,19,254,0.1)]"}`}
          onClick={() => setTabName("rewards")}
        >
          Redeem Rewards
        </button>
      </div>

      {tabName === "earnPoint" && (
        <>
          <RewardsJourney
            setShowSuccessModal={setShowSuccessModal}
            setShowFeaturedModal={setShowFeaturedModal}
          />

          <MorePoints />

          <Refer />

          {showSuccessModal && (
            <SuccessModal
              showSuccessModal={showSuccessModal}
              setShowSuccessModal={setShowSuccessModal}
            />
          )}

          {showFeaturedModal && (
            <FeaturedModal
              showFeaturedModal={showFeaturedModal}
              setShowFeaturedModal={setShowFeaturedModal}
            />
          )}
        </>
      )}

      {/* REWARDS */}
      {tabName === "rewards" && <Redeem />}
    </div>
  );
}

export default Rewards;
