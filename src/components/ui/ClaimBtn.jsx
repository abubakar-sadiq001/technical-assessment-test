import { differenceInDays } from "date-fns";
import { useProfile } from "../../lib/useProfile";
import { useResetStreak } from "../../lib/useResetStreak";
import { useUpdateLastClaim } from "../../lib/useUpdateLastClaim";
import { useUser } from "../../lib/useUser";

function ClaimBtn({ setShowSuccessModal }) {
  const { lastClaim: updateLastClaim, isUpdating } = useUpdateLastClaim();
  const { user } = useUser();
  const { profile } = useProfile();
  const { resetUserStreak } = useResetStreak();

  const today = new Date();
  // today.setHours(0, 0, 0, 0);
  const lastActive = profile?.last_claimed_at
    ? new Date(profile?.last_claimed_at)
    : null;

  const dayDifference = differenceInDays(today, lastActive);
  const disabled = dayDifference === 0;

  // useEffect(() => {
  //   if (dayDifference > 1) {
  //     resetUserStreak(user?.id);
  //   }
  // }, [dayDifference]);

  function handleClaiming() {
    // Set time to midnight for consistent day comparison, handles timezones for the current user

    if (!lastActive) {
      updateLastClaim(user?.id, {
        onSuccess: () => {
          setShowSuccessModal(true);
        },
      });
    } else {
      if (dayDifference === 0) {
        // User already active today, do nothing to prevent double counting
        return null;
      }

      if (dayDifference === 1) {
        // User was active yesterday, increment the streak
        updateLastClaim(user?.id, {
          onSuccess: () => {
            setShowSuccessModal(true);
          },
        });
      }

      if (dayDifference > 1) {
        // User missed one or more days, reset the streak
        updateLastClaim(user?.id, {
          onSuccess: () => {
            setShowSuccessModal(true);
            resetUserStreak(user?.id);
          },
        });
      }
    }
  }

  return (
    <button
      onClick={handleClaiming}
      disabled={disabled || isUpdating}
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
