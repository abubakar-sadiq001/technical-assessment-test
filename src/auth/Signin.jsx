import { Link } from "react-router";

function Signin() {
  return (
    <div className="h-screen w-full bg-[linear-gradient(#901efe,#6D28D9)] p-5">
      <div className="mx-auto w-full max-w-105 rounded-md bg-white px-8 py-5">
        <div className="text-center">
          <h1 className="text-[23px] font-bold text-[#901efe]">
            Log in to flowva{" "}
          </h1>
          <p className="text-sm text-gray-500">
            Log in to receive personalized recommendations
          </p>
        </div>

        <form className="my-5">
          <div>
            <div>
              <label htmlFor="email" className="text-[15px]">
                Email
              </label>
            </div>
            <input
              type="email"
              id="email"
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
              className="my-2 w-full rounded-md border px-4 py-3"
              placeholder="***********"
            />
          </div>

          <button className="my-3 w-full cursor-pointer rounded-full bg-[#901efe] py-4 text-center font-semibold text-white">
            Sign in
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
