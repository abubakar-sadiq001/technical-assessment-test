import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { signup } from "./data-service";
import { toast } from "react-hot-toast";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signupUser, isPending } = useMutation({
    mutationFn: signup,

    onSuccess: () => {
      navigate("/signin", { replace: true });
    },

    onError: () => {
      toast.error("Couldn't create your account right now retry later!");
    },
  });

  return { signupUser, isPending };
}
