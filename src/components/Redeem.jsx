import useGetRedeems from "../lib/useGetRedeems";
import RedeemTableOperations from "./ui/RedeemTableOperations";
import Skeleton from "./ui/Skeleton";
import { formatCurrency } from "../utils/helper";
import { useState } from "react";

function Redeem() {
  const { rewards, isLoading } = useGetRedeems();
  // console.log(rewards);
  const [filterName, setFilterName] = useState("all");

  let filteredRewards;

  //   FILTER LOGIC
  if (filterName === "all") filteredRewards = rewards;

  if (filterName === "unlocked")
    filteredRewards = rewards?.filter((reward) => reward.status === filterName);

  if (filterName === "locked")
    filteredRewards = rewards?.filter((reward) => reward.status === filterName);

  if (filterName === "soon")
    filteredRewards = rewards?.filter((reward) => reward.status === "soon");

  return (
    <div>
      <RedeemTableOperations
        filterName={filterName}
        setFilterName={setFilterName}
      />

      {!isLoading ? (
        <ul className="mt-10 grid grid-cols-3 gap-6 max-[988px]:grid-cols-2 max-[632px]:grid-cols-1">
          {filteredRewards?.map((reward) => (
            <li
              key={reward.id}
              className="translate-y-0 transform cursor-no-drop rounded-[10px] border border-[#E9D4FF] bg-white p-5 shadow-[#dcdcdc] duration-300 hover:-translate-y-1.5 hover:shadow-[0px_8px_10px]"
            >
              <div className="text-center">
                <div className="mx-auto flex w-13 justify-center rounded-[10px] bg-[#E9D4FF] p-2">
                  <p className="text-2xl">
                    {reward.name.toLowerCase().endsWith("card") ? "🎁" : "💸"}
                  </p>
                </div>

                <h1 className="mt-4 text-[18px] font-semibold text-gray-600">{`${formatCurrency(reward.amount || null)} ${reward.name}`}</h1>

                <p className="my-3 text-sm text-gray-500">{reward.details}</p>

                <p className="text-sm font-semibold text-[#901efe]">
                  ⭐ {reward.min_points} pts
                </p>
              </div>

              <button className="mt-3 flex w-full cursor-no-drop items-center justify-center rounded-lg bg-[#d7e0ed] px-3 py-3 text-[14px] font-semibold text-white">
                Locked
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}

export default Redeem;
