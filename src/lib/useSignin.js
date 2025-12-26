import { useMutation } from "@tanstack/react-query";
import { signin } from "./data-service";
import { useNavigate } from "react-router-dom";

export function useSignin() {
  const navigate = useNavigate();
  const { mutate: signinUser, isPending } = useMutation({
    mutationFn: ({ email, password }) => signin({ email, password }),

    onSuccess: (user) => {
      console.log(user);
      navigate("/", { replace: true });
    },
  });

  return { signinUser, isPending };
}
