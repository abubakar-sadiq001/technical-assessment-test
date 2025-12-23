import { useMutation, useQueryClient } from "@tanstack/react-query";
import { claimPoints } from "./data-service";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updateStreak, isPending } = useMutation({
    mutationFn: ({ streakID }) => claimPoints(streakID),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["weekDays"] });
    },

    onError: (err) => console.error(err.message),
  });

  return { updateStreak, isPending };
}
