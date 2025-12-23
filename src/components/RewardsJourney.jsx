import { useEffect, useState } from "react";
import { getWeekDays } from "../lib/data-service";
import PointsBalance from "./PointsBalance";
import DailyStreak from "./DailyStreak";

function RewardsJourney() {
  const currentDay = new Date().getDay();
  const [weekDays, setWeekDays] = useState([]);

  useEffect(() => {
    getWeekDays().then((data) => setWeekDays(data));
  }, []);

  return (
    <div>
      <h1 className="my-3 border-l-4 border-[#901efe] pl-4 text-2xl font-semibold">
        Your Rewards Journey
      </h1>

      <div className="flex justify-center gap-5">
        <PointsBalance />

        <DailyStreak />

        <div className="rounded-xl bg-white shadow-[0px_5px_10px] shadow-[#dcdcdc]">
          <header className="flex items-center justify-between gap-2 rounded-tl-xl rounded-tr-xl border-b-[#f3f4f6] bg-[linear-gradient(135deg,_#9013FE_0%,_#70D6FF_100%)] p-4 text-[13px] text-gray-700 text-white">
            <div className="flex flex-col justify-between gap-4">
              <p className="w-full max-w-[80px] min-w-[80px] rounded-full bg-[#ffffff33] py-1 text-center text-[12px] backdrop-blur-sm">
                Featured
              </p>
              <h1 className="text-[20px] font-bold">Top Tool Spotlight</h1>
              <h1 className="text-[17px] font-semibold">Reclaim</h1>
            </div>
            <div>
              <img src="./spotlight-icon2.png" width={60} />
            </div>
          </header>

          <section className="">
            {/*  */}
            <div className="flex gap-4 px-4 py-3">
              <ion-icon name="calendar" style={{ fontSize: "30px" }}></ion-icon>
              <div>
                <p className="text-[14px] font-semibold text-gray-800">
                  Automate and Optimize Your Schedule
                </p>
                <p className="my-2 mb-4 w-full max-w-[250px] text-[13px] text-gray-600">
                  Reclaim.ai is an AI-powered calendar assistant that
                  automatically schedules your tasks, meetings, and breaks to
                  boost productivity. Free to try — earn Flowva Points when you
                  sign up!
                </p>
              </div>
            </div>

            {/*  */}
            <div className="flex justify-between border-t border-[#f3f4f6] px-3 py-[4.5px]">
              <button className="flex cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-[#9013fe] px-4 py-2 font-semibold text-white transition-all duration-200 hover:bg-[#8628da]">
                <ion-icon name="calendar"></ion-icon>
                <p className="text-[13px]">Sign up</p>
              </button>
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-pink-500 bg-[linear-gradient(45deg,#9013FE,#FF8687)] px-4 py-2 text-sm font-semibold text-white">
                <ion-icon name="calendar"></ion-icon>
                <p className="text-[13px]">Claim 50 pts</p>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RewardsJourney;
