import DailyStreak from "./DailyStreak";
import Featured from "./Featured";
import PointsBalance from "./PointsBalance";

function RewardsJourney({ setShowConfetti }) {
  return (
    <div>
      <h1 className="my-3 border-l-4 border-[#901efe] pl-4 text-2xl font-semibold">
        Your Rewards Journey
      </h1>

      <div className="flex justify-center gap-5">
        <PointsBalance />

        <DailyStreak setShowConfetti={setShowConfetti} />

        <Featured />
      </div>
    </div>
  );
}

export default RewardsJourney;
