import RewardsJourney from "../components/RewardsJourney";

function Rewards() {
  return (
    <div>
      <div className="flex cursor-pointer gap-2 text-[15px]">
        <button className="ho cursor-pointer rounded-tl-[10px] rounded-tr-[10px] px-4 py-4 hover:bg-[rgba(144,_19,_254,_0.2)]">
          Earn Point
        </button>
        <button className="cursor-pointer rounded-tl-[10px] rounded-tr-[10px] px-4 py-4 hover:bg-[rgba(144,_19,_254,_0.2)]">
          Redeem Rewards
        </button>
      </div>

      <RewardsJourney />
    </div>
  );
}

export default Rewards;
