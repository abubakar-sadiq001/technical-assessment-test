import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markAll } from "./data-service";
import toast from "react-hot-toast";

function useMarkAll() {
  const queryClient = useQueryClient();

  const { mutate: markAllNotif, isPending: isMarking } = useMutation({
    mutationFn: markAll,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },

    onError: () => {
      toast.error("failed to mark all!");
    },
  });

  return { markAllNotif, isMarking };
}

export default useMarkAll;
