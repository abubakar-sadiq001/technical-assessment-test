import { useGetWeeks } from "../lib/useGetWeekDay";

function DailyStreak({ setShowSuccessModal }) {
  const { weekDays, isLoading } = useGetWeeks();
  const currentDay = new Date().getDay();
  const totalClaimedDays =
    weekDays?.filter((day) => day.isClaimed === true).length || 0;

  // const { profile, isLoading: isGetProfile } = useGetProfile();
  // console.log(profile);

  //   const activeDay = weekDays?.find((day) => day.week_value === currentDay);

  //

  // function handleClick() {
  //   // updateStreak(
  //     { streakID: activeDay.id },
  //     {
  //       onSettled: () => {
  //         setShowSuccessModal(true);
  //       },
  //     },
  //   );
  // }

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
          {totalClaimedDays} days
        </h1>

        {/*  */}
        <ul className="mt-8 flex justify-center gap-2">
          {weekDays?.map((day) => (
            <li key={day.id} className="">
              {!isLoading ? (
                <div
                  className={`flex w-full items-center px-3 py-2 max-[988px]:px-4 max-[988px]:py-3 ${day.week_value === currentDay && " rounded-full border-2 border-[#901efe] ring-2 ring-[#9013FE] ring-offset-1 "} justify-center rounded-full ${day.isClaimed === true && day.week_value != currentDay ? "border-3 border-cyan-200 bg-[#70D6FF] text-white " : "bg-gray-200"} text-center font-semibold`}
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
          // onClick={handleClick}
          // disabled={activeDay?.isClaimed === true || isPending}
          // className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-full py-3 text-[14px] font-semibold ${isPending || activeDay?.isClaimed === true ? "bg-gray-200 text-gray-500" : "bg-[#9013FE] text-white"}`}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#9013FE] bg-gray-200 py-3 text-[14px] font-semibold text-gray-500 text-white"
          // style={{
          //   cursor:
          //     isPending || activeDay?.isClaimed === true
          //       ? "no-drop"
          //       : "pointer",
          // }}
        >
          <div>
            <img
              src="./energy-icon-white.svg"
              // src={
              //   activeDay?.isClaimed === true || isPending
              //     ? "./energy-icon-gray.svg"
              //     : "./energy-icon-white.svg"
              // }
              width={20}
            />
          </div>
          Claim Today
        </button>
      </section>
    </div>
  );
}

export default DailyStreak;
