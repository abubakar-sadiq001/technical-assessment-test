import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteAllNotif } from "./data-service";

function useDeleteNotif() {
  const queryClient = useQueryClient();

  const { mutate: deleteAll, isPending: isDeleting } = useMutation({
    mutationFn: deleteAllNotif,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },

    onError: () => {
      toast.error("Failed to delete notifications!");
    },
  });

  return { deleteAll, isDeleting };
}

export default useDeleteNotif;
