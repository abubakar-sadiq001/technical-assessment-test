import DailyStreak2 from "./DailyStreak2";
import Featured from "./Featured";
import PointsBalance from "./PointsBalance";

function RewardsJourney({ setShowSuccessModal, setShowFeaturedModal }) {
  return (
    <div>
      <h1 className="my-3 border-l-4 border-[#901efe] pl-4 text-2xl font-semibold">
        Your Rewards Journey
      </h1>

      <div className="grid grid-cols-3 justify-center gap-5 max-[988px]:grid-cols-1">
        <PointsBalance />

        {/* <DailyStreak setShowSuccessModal={setShowSuccessModal} /> */}
        <DailyStreak2 />

        <Featured setShowFeaturedModal={setShowFeaturedModal} />
      </div>
    </div>
  );
}

export default RewardsJourney;
