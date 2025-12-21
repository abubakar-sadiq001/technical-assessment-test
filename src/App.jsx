import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Rewards from "./pages/Rewards";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
