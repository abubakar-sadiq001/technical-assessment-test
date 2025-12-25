import useGetRedeems from "../../lib/useGetRedeems";

function RedeemTableOperations({ filterName, setFilterName }) {
  const { rewards } = useGetRedeems();

  const allRewards = rewards?.length;
  const unlockedRewards = rewards?.filter(
    (reward) => reward.status === "unlocked",
  );
  const locked =
    rewards?.filter((reward) => reward.status === "locked")?.length || 0;
  const cominSoon =
    rewards?.filter((reward) => reward.status === "soon")?.length || 0;

  return (
    <div>
      <h1 className="my-3 border-l-4 border-[#901efe] pl-4 text-2xl font-semibold">
        Redeem Your Points
      </h1>

      <div className="flex gap-2">
        <button
          className={`flex items-center gap-3 rounded-tl-[10px] rounded-tr-[10px] px-4 py-3 ${filterName === "all" ? " relative cursor-no-drop border-b-2 border-[#901efe] bg-[rgba(144,19,254,0.2)] text-[#901efe] " : "cursor-pointer text-gray-500 hover:bg-[rgba(144,19,254,0.1)]"}`}
          onClick={() => setFilterName("all")}
        >
          All Rewards
          <p
            className={` ${filterName === "all" ? "bg-[rgba(144,19,254,0.2)] text-[#90efe]" : "bg-[#E2E8F0] text-[#CBD5E0]"} rounded-full px-2 text-[13px] font-semibold`}
          >
            {allRewards || 0}
          </p>
        </button>
        <button
          className={`flex items-center gap-3 rounded-tl-[10px] rounded-tr-[10px] px-4 py-3 ${filterName === "unlocked" ? " cursor-no-drop border-b-2 border-[#901efe] bg-[rgba(144,19,254,0.2)] text-[#901efe]" : "cursor-pointer text-gray-500 hover:bg-[rgba(144,19,254,0.1)]"} `}
          onClick={() => setFilterName("unlocked")}
        >
          Unlocked
          <p
            className={` ${filterName === "unlocked" ? "bg-[rgba(144,19,254,0.2)] text-[#90efe]" : "bg-[#E2E8F0] text-[#CBD5E0]"} rounded-full px-2 text-[13px] font-semibold`}
          >
            {!unlockedRewards?.length ? 0 : unlockedRewards}
          </p>
        </button>
        <button
          className={`flex items-center gap-3 rounded-tl-[10px] rounded-tr-[10px] ${filterName === "locked" ? " cursor-no-drop border-b-2 border-[#901efe] bg-[rgba(144,19,254,0.2)] text-[#901efe] " : "cursor-pointer text-gray-500 hover:bg-[rgba(144,19,254,0.1)]"} px-4 py-3`}
          onClick={() => setFilterName("locked")}
        >
          Locked
          <p
            className={` ${filterName === "locked" ? "bg-[rgba(144,19,254,0.2)] text-[#90efe]" : "bg-[#E2E8F0] text-[#CBD5E0]"} rounded-full px-2 text-[13px] font-semibold`}
          >
            {locked}{" "}
          </p>
        </button>
        <button
          className={`flex items-center gap-3 rounded-tl-[10px] rounded-tr-[10px] px-4 py-3 ${filterName === "soon" ? " cursor-no-drop border-b-2 border-[#901efe] bg-[rgba(144,19,254,0.2)] text-[#901efe] " : "cursor-pointer text-gray-500 hover:bg-[rgba(144,19,254,0.1)] "}`}
          onClick={() => setFilterName("soon")}
        >
          Comin Soon
          <p
            className={` ${filterName === "soon" ? "bg-[rgba(144,19,254,0.2)] text-[#90efe]" : "bg-[#E2E8F0] text-[#CBD5E0]"} rounded-full px-2 text-[13px] font-semibold`}
          >
            {cominSoon}
          </p>
        </button>
      </div>
    </div>
  );
}

export default RedeemTableOperations;
