import { useQuery } from "@tanstack/react-query";
import { getWeekDays } from "./data-service";

export function useGetWeeks() {
  const { data: weekDays = [], isLoading } = useQuery({
    queryKey: ["weekDays"],
    queryFn: getWeekDays,
  });

  return { weekDays, isLoading };
}
