import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router";
import { useSignup } from "../lib/useSignUp";

function Signup() {
  const [searchParam, setSeachParam] = useSearchParams();
  // const xyz = setSeachParam(searchParam);
  console.log(searchParam.get("ref"));

  const { signupUser, isPending } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ email, password }) {
    const refQuery = searchParam?.get("ref") || "";
    const referredBy = refQuery;

    signupUser({ email, password, referredBy, onSettled: () => reset() });
  }

  return (
    <div className="w-full bg-[linear-gradient(#901efe,#6D28D9)] p-5">
      <div className="mx-auto w-full max-w-105 rounded-md bg-white px-8 py-5">
        <div className="text-center">
          <h1 className="text-[23px] font-bold text-[#901efe]">
            Create Your Account
          </h1>
          <p className="text-sm text-gray-500">Sign up to manage your tools</p>
        </div>

        <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <label htmlFor="email" className="text-[15px]">
                Email
              </label>
            </div>
            <input
              type="email"
              id="email"
              disabled={isPending}
              className="my-2 w-full rounded-md border px-4 py-3"
              placeholder="youremail@example.com"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />

            <p className="text-xs text-red-500">{errors?.email?.message}</p>
          </div>

          {/*  */}
          <div className="my-4">
            <div>
              <label htmlFor="password" className="text-[15px]">
                Password
              </label>
            </div>
            <input
              type="password"
              id="password"
              disabled={isPending}
              className="my-2 w-full rounded-md border px-4 py-3"
              placeholder="***********"
              {...register("password", { required: "This field is required" })}
            />

            <p className="text-xs text-red-500">{errors?.password?.message}</p>
          </div>

          {/*  */}
          <div>
            <div>
              <label htmlFor="confirmPass" className="text-[15px]">
                Confirm Password
              </label>
            </div>
            <input
              type="password"
              id="confirmPass"
              disabled={isPending}
              className="my-2 w-full rounded-md border px-4 py-3"
              placeholder="***********"
              {...register("confirmPass", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "Password need to match",
              })}
            />

            <p className="text-xs text-red-500">
              {errors?.confirmPass?.message}
            </p>
          </div>

          <button
            className="my-3 w-full rounded-full bg-[#901efe] py-4 text-center font-semibold text-white"
            disabled={isPending}
            style={{
              cursor: isPending ? "no-drop" : "pointer",
            }}
          >
            {isPending ? "Signing up..." : "Sign Up Account"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Already have an account ?{" "}
          <Link to="/signin" className="text-[#901efe]">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
