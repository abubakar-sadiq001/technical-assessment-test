import { differenceInDays } from "date-fns";
import { useProfile } from "../../lib/useProfile";
import { useUpdateLastClaim } from "../../lib/useUpdateLastClaim";
import { useUser } from "../../lib/useUser";
import { updateDailyStreak } from "../../utils/dailyStreak";

function ClaimBtn() {
  const { lastClaim: updateLastClaim, isUpdating } = useUpdateLastClaim();
  const { user } = useUser();

  const { profile } = useProfile();
  const claimedAt = profile?.last_claimed_at;

  const dayDifference = differenceInDays(new Date(), new Date(claimedAt));
  const disabled = dayDifference === 0;

  function handleClaiming() {
    updateDailyStreak(user, updateLastClaim);
  }

  return (
    <button
      onClick={handleClaiming}
      disabled={disabled || isUpdating}
      // onClick={handleClick}
      // disabled={activeDay?.isClaimed === true || isPending}
      // className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-full py-3 text-[14px] font-semibold ${isPending || activeDay?.isClaimed === true ? "bg-gray-200 text-gray-500" : "bg-[#9013FE] text-white"}`}
      className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-full py-3 text-[14px] font-semibold ${disabled === true ? "bg-gray-200 text-gray-500" : "bg-[#9013FE] text-white"}`}
      style={{
        cursor: disabled || isUpdating ? "no-drop" : "pointer",
      }}
    >
      <div>
        <img
          src={disabled ? "./energy-icon-gray.svg" : "./energy-icon-white.svg"}
          width={20}
        />
      </div>
      {isUpdating ? "Claiming..." : " Claimed Today"}
    </button>
  );
}

export default ClaimBtn;
