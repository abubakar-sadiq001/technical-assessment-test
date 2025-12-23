import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Rewards from "./pages/Rewards";

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
            <Route element={<AppLayout />}>
              <Route path="*" element={<PageNotFound />} />
              <Route index="/" element={<Home />} />
              <Route path="discover" element={<Discover />} />
              <Route path="rewards" element={<Rewards />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
