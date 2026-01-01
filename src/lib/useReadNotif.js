import { useMutation, useQueryClient } from "@tanstack/react-query";
import { readNotif } from "./data-service";
import toast from "react-hot-toast";

function useReadNotif() {
  const queryClient = useQueryClient();
  const { mutate: readUserNotif, isPending: isReading } = useMutation({
    mutationFn: readNotif,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },

    onError: () => {
      toast.success("Failed to open notificaton!");
    },
  });

  return { readUserNotif, isReading };
}

export default useReadNotif;
