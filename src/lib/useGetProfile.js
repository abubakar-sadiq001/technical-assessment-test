import { useQuery } from "@tanstack/react-query";
import { getProfileData } from "./data-service";

export function useGetProfile() {
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profiles"],
    queryFn: getProfileData,
  });

  if (error) console.log(error);

  return { profile, isLoading };
}
