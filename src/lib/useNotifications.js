import { useQuery } from "@tanstack/react-query";
import { getUserNotification } from "./data-service";
import { useUser } from "./useUser";

export function useNotification() {
  // const { user } = useUser();

  const { data, isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => getUserNotification,
  });

  return { data, isLoading };
}
