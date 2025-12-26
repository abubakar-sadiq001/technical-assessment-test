import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "./data-service";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { user, isLoading, isAuthenticated: !!user?.role };
}
