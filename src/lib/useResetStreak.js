import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resetStreak } from "./data-service";

export function useResetStreak() {
  const queryClient = useQueryClient();

  const { mutate: resetUserStreak } = useMutation({
    mutationFn: resetStreak,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profiles"] });
    },

    onError: (error) => {
      throw new Error(error.message);
    },
  });

  return { resetUserStreak };
}
