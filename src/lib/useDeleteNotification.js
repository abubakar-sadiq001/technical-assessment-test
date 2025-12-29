import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNotification } from "./data-service";

function useDeleteNotification() {
  const queryClient = useQueryClient();

  const { mutate: deleteNotif, isPending: isDeleting } = useMutation({
    mutationFn: deleteNotification,

    onSuccess: () => {
      alert("Deletion Success");
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },

    onError: () => {
      alert("Deletion Failed");
    },
  });

  return { deleteNotif, isDeleting };
}

export default useDeleteNotification;
