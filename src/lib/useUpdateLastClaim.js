import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLastClaim } from "./data-service";

export function useUpdateLastClaim() {
  const queryClient = useQueryClient();

  const { mutate: lastClaim, isPending: isUpdating } = useMutation({
    mutationFn: updateLastClaim,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profiles"] });
    },

    onError: (error) => {
      console.error(error.message);
    },
  });

  return { lastClaim, isUpdating };
}
