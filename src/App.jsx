import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Rewards from "./pages/Rewards";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import ProtectedRoute from "./auth/ProtectedRoute";
import { Toaster } from "react-hot-toast";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index="/" element={<Home />} />
              <Route path="discover" element={<Discover />} />
              <Route path="rewards" element={<Rewards />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#fff",
              color: "#14141499",
              boxShadow: "0px 5px 10px #5a475799",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
