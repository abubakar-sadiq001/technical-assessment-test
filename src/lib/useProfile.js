// import { useQuery } from "@tanstack/react-query";
// import { getProfileData } from "./data-service";

import { useQuery } from "@tanstack/react-query";
import { getProfileData } from "./data-service";
import { useUser } from "./useUser";

export function useProfile() {
  const { user } = useUser();

  const { data: profile, error } = useQuery({
    queryKey: ["profiles"],
    queryFn: () => getProfileData(user?.id),
  });
  if (error) throw new Error(error);

  return { profile };
}
