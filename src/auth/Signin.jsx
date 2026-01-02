import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignin } from "../lib/useSignin";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signinUser, isPending } = useSignin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("missing email/password");
      return;
    }

    signinUser(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
    // signin({ email, password });
  }

  return (
    <div className="flex h-screen w-full justify-center bg-[linear-gradient(#901efe,#6D28D9)] p-5">
      <div className="h-full max-h-[450px] w-full max-w-105 overflow-y-auto rounded-md bg-white px-8 py-5">
        <div className="text-center">
          <h1 className="text-[23px] font-bold text-[#901efe]">
            Log in to flowva{" "}
          </h1>
          <p className="text-sm text-gray-500">
            Log in to receive personalized recommendations
          </p>
        </div>

        <form onSubmit={handleSubmit} className="my-5">
          {error && (
            <div className="my-3 flex w-full items-center gap-2 rounded-md bg-red-100 p-3">
              <ion-icon
                name="alert-circle-outline"
                style={{
                  color: " #fb2c36",
                  height: "25px",
                }}
              ></ion-icon>
              <p className="text-[13px] text-red-500">{error}</p>
            </div>
          )}
          <div>
            <div>
              <label htmlFor="email" className="text-[15px]">
                Email
              </label>
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isPending}
              className="my-2 w-full rounded-md border px-4 py-3"
              placeholder="youremail@example.com"
            />
          </div>

          {/*  */}
          <div>
            <div>
              <label htmlFor="password" className="text-[15px]">
                Password
              </label>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isPending}
              className="my-2 w-full rounded-md border px-4 py-3"
              placeholder="***********"
            />
          </div>

          <button
            disabled={isPending}
            className="my-3 w-full cursor-pointer rounded-full bg-[#901efe] py-4 text-center font-semibold text-white"
            style={{
              cursor: isPending ? "no-drop" : "pointer",
            }}
          >
            {isPending ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Don't have an account ?{" "}
          <Link to="/signup" className="text-[#901efe]">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
