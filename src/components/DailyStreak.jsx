import { useGetWeeks } from "../lib/useGetWeekDay";
import { useUpdateSettings } from "../lib/useUpdateStreak";

function DailyStreak() {
  const { weekDays, isLoading } = useGetWeeks();
  const currentDay = new Date().getDay();
  // const [weekDays, setWeekDays] = useState([]);
  const { updateStreak, isPending } = useUpdateSettings();
  const totalClaimedDays =
    weekDays?.filter((day) => day.isClaimed === true).length || 0;

  const activeDay = weekDays?.find((day) => day.week_value === currentDay);

  function handleClick() {
    updateStreak(
      { streakID: activeDay.id },
      {
        onSettled: () => {
          console.log("Claimed!!");
        },
      },
    );
  }

  return (
    <div className="rounded-xl bg-gray-50 shadow-[0px_5px_10px] shadow-[#dcdcdc]">
      <header className="flex items-center gap-2 rounded-tl-xl rounded-tr-xl border-b-[#f3f4f6] bg-[#eef2ff] px-4 py-5 text-[17px] font-semibold text-gray-700">
        <ion-icon name="calendar"></ion-icon>
        <h1 className="text-gray-700">Daily Streak</h1>
      </header>

      <section className="p-3">
        {/*  */}
        <h1 className="my-4 text-4xl font-extrabold text-[#9013FE]">
          {totalClaimedDays} days
        </h1>

        {/*  */}
        <ul className="mt-8 flex gap-2">
          {weekDays?.map((day) => (
            <li key={day.id} className="">
              {!isLoading ? (
                <div
                  className={`flex h-10 w-10 items-center ${day.week_value === currentDay && " rounded-full border-2 border-[#901efe] ring-2 ring-[#9013FE] ring-offset-1 "} justify-center rounded-full ${day.isClaimed === true && day.week_value != currentDay ? "bg-[#901efe] text-white" : "bg-gray-200"} text-center font-semibold`}
                >
                  <p
                    className={`text-[14px] ${day.isClaimed === true && day.week_value != currentDay ? "text-white" : "text-gray-500"} `}
                  >
                    {day.week_day.slice(0, 1)}
                  </p>
                </div>
              ) : (
                <p className="tex-cener">Loading...</p>
              )}
            </li>
          ))}
        </ul>

        {/*  */}
        <p className="my-3 text-center text-[14px] text-gray-500">
          Check in daily to to earn +5 points
        </p>
        {/*  */}
        <button
          onClick={handleClick}
          disabled={activeDay?.isClaimed === true || isPending}
          className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-full py-3 text-[14px] font-semibold ${isPending || activeDay?.isClaimed === true ? "bg-gray-200 text-gray-500" : "bg-[#9013FE] text-white"}`}
          style={{
            cursor:
              isPending || activeDay?.isClaimed === true
                ? "no-drop"
                : "pointer",
          }}
        >
          <div>
            <img src="./energy-icon.svg" width={20} />
          </div>
          <p>
            {activeDay?.isClaimed === true
              ? "Claimed Today"
              : "Claim Today's Point"}
          </p>
        </button>
      </section>
    </div>
  );
}

export default DailyStreak;
