import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { signup } from "./data-service";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signupUser, isPending } = useMutation({
    mutationFn: signup,

    onSuccess: () => {
      navigate("/signin", { replace: true });
    },
  });

  return { signupUser, isPending };
}
