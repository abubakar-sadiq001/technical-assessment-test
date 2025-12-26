import { useEffect } from "react";
import { useUser } from "../lib/useUser";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/signin");
    },
    [isAuthenticated, isLoading, navigate],
  );

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center text-center text-2xl">
        <img src="./flowva-logo.png" width={200} className="animate-pulse" />
      </div>
    );

  // If there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
