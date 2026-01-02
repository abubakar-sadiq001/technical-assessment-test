import { useGetWeeks } from "../lib/useGetWeekDay";
import { useProfile } from "../lib/useProfile";
import ClaimBtn from "./ui/ClaimBtn";

function DailyStreak({ setShowSuccessModal }) {
  const { weekDays } = useGetWeeks();
  const currentDay = new Date().getDay();

  const { profile, isLoading } = useProfile();
  const streakCount = profile?.streakCount;

  if (isLoading)
    return (
      <div className="max-85 h-75 w-full animate-pulse rounded-xl bg-gray-300"></div>
    );

  return (
    <div className="w-full translate-y-0 transform rounded-xl bg-gray-50 shadow-[0px_5px_10px] shadow-[#dcdcdc] duration-300 hover:-translate-y-1.5 hover:shadow-[0px_8px_10px]">
      <header className="flex items-center gap-2 rounded-tl-xl rounded-tr-xl border-b-[#f3f4f6] bg-[#eef2ff] p-5 text-[17px] font-semibold text-gray-700">
        <ion-icon
          name="calendar-clear-outline"
          style={{
            color: "#70D6FF",
            fontSize: "20px",
          }}
        ></ion-icon>
        <h1 className="text-gray-700">Daily Streak</h1>
      </header>

      <section className="p-3">
        {/*  */}
        <h1 className="my-4 text-4xl font-extrabold text-[#9013FE]">
          {streakCount} days
        </h1>

        {/*  */}
        <ul className="mt-8 flex justify-center gap-2">
          {weekDays?.map((day) => (
            <li
              key={day.id}
              className={`mt-8 flex h-9 w-9 flex-wrap ${day.week_value === currentDay && " rounded-full border-2 border-[#901efe] ring-2 ring-[#9013FE] ring-offset-1 "} items-center justify-center rounded-full bg-gray-200`}
            >
              <p
                // border-cyan-200 bg-[#70D6FF] text-white
                className={`text-[14px] text-gray-500`}
              >
                {day.week_day.slice(0, 1)}
              </p>
            </li>
          ))}
        </ul>

        {/*  */}
        <p className="my-3 text-center text-[14px] text-gray-500">
          Check in daily to to earn +5 points
        </p>
        {/*  */}

        <ClaimBtn setShowSuccessModal={setShowSuccessModal} />
      </section>
    </div>
  );
}

export default DailyStreak;
