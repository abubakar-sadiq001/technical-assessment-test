import { useGetWeeks } from "../lib/useGetWeekDay";

const MAX = 5000;

function PointsBalance() {
  const { weekDays } = useGetWeeks();
  const streakLength = weekDays?.filter((day) => day.isClaimed)?.length;
  const PointBalance = 5 * streakLength;
  const calculatedRange = Math.min((PointBalance / MAX) * 100, 100);

  return (
    <div className="w-full translate-y-0 transform rounded-xl bg-gray-50 shadow-[0px_5px_10px] shadow-[#dcdcdc] duration-300 hover:-translate-y-1.5 hover:shadow-[0px_8px_10px]">
      <header className="flex items-center gap-2 rounded-tl-xl rounded-tr-xl border-b-[#f3f4f6] bg-[#eef2ff] p-5 text-[17px] font-semibold text-gray-700">
        <ion-icon
          name="medal-outline"
          style={{
            color: "#901efe",
            fontSize: "20px",
          }}
        ></ion-icon>
        <h1 className="text-gray-700">Points Balance</h1>
      </header>

      <section className="p-3">
        {/*  */}
        <div className="mt-7 flex items-center justify-between px-2">
          <h1 className="text-4xl font-extrabold text-[#9013FE]">
            {PointBalance}
          </h1>
          <div>
            <img src="./coin.png" width={45} draggable={false} id="coin" />
          </div>
        </div>

        {/*  */}
        <div className="mt-10 px-1">
          <div className="my-1 flex items-center justify-between">
            <p className="text-[14px] text-gray-600">
              Progress to <b>$5 Gift Card</b>
            </p>
            <p className="text-[15px] font-semibold">{`${PointBalance}/${MAX}`}</p>
          </div>

          {/*  */}
          <div>
            <div className="relative h-2 w-full rounded-full bg-gray-200">
              <div
                className="absolute left-[1px] h-2 rounded-full bg-[#901efe] transition-all duration-300"
                style={{
                  width: calculatedRange + "%",
                }}
              ></div>
            </div>
            <p className="mt-1 text-[12px] text-gray-500">
              🚀 Just getting started — keep earning points!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PointsBalance;
