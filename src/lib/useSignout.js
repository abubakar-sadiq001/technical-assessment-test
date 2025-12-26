import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signout } from "./data-service";
import { useNavigate } from "react-router-dom";

export function useSignout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signoutUser, isPending } = useMutation({
    mutationFn: signout,

    onSuccess: () => {
      navigate("/signin", { replace: true });
      queryClient.removeQueries();
    },
  });

  return { signoutUser, isPending };
}
