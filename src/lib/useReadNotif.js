import { useMutation } from "@tanstack/react-query";
import { readNotif } from "./data-service";

function useReadNotif() {
  const { mutate: readUserNotif, isPending: isReading } = useMutation({
    mutationFn: readNotif,

    onError: () => {
      alert("Failed to open notificaton!");
    },
  });

  return { readUserNotif, isReading };
}

export default useReadNotif;
