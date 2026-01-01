import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signin } from "./data-service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signinUser, isPending } = useMutation({
    mutationFn: ({ email, password }) => signin({ email, password }),

    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      // navigate("/rewards", { replace: true });
      setTimeout(() => {
        navigate("/rewards", { replace: true });
      }, 300); // Small delay to ensure auth state is synchronized
    },

    onError: (error) => {
      console.log(error.message);
      toast.error(error.message);
    },
  });

  return { signinUser, isPending };
}
