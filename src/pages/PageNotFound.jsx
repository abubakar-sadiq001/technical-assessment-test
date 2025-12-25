import { Link } from "react-router";

function PageNotFound() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold">
          This page could not be found :(
        </h1>
        <Link
          to="/"
          className="my-5 inline-block rounded-md bg-gray-900 px-6 py-3 text-sm text-white"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}

export default PageNotFound;
