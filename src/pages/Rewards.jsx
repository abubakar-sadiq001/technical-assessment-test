import MorePoints from "../components/MorePoints";
import Refer from "../components/Refer";
import RewardsJourney from "../components/RewardsJourney";

function Rewards() {
  return (
    <div>
      <div className="mb-10 flex cursor-pointer gap-2 text-[15px]">
        <button className="ho cursor-pointer rounded-tl-[10px] rounded-tr-[10px] bg-[rgba(144,_19,_254,_0.2)] px-4 py-4 hover:bg-[rgba(144,_19,_254,_0.2)]">
          Earn Point
        </button>
        <button className="cursor-pointer rounded-tl-[10px] rounded-tr-[10px] px-4 py-4 hover:bg-[rgba(144,_19,_254,_0.2)]">
          Redeem Rewards
        </button>
      </div>

      <RewardsJourney />

      <MorePoints />

      <Refer />
    </div>
  );
}

export default Rewards;
