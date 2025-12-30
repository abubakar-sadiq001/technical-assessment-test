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
      console.log(user);
      queryClient.setQueryData(["user", user.user]);
      navigate("/rewards", { replace: true });
    },

    onError: (error) => {
      console.log(error.message);
      toast.error(error.message);
    },
  });

  return { signinUser, isPending };
}
