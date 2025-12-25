import { useQuery } from "@tanstack/react-query";
import { getRedeems } from "./data-service";

function useGetRedeems() {
  const {
    data: rewards,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["redeem_rewards"],
    queryFn: getRedeems,
  });

  if (error) console.log(error.message);

  return { rewards, isLoading };
}

export default useGetRedeems;
