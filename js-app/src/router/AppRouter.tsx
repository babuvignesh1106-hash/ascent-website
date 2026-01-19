import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants";
import Dashboard from "../pages/Dashboard";
import Dashboard2 from "../pages/Aboutus/Dashboard2";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.DASHBOARD2} element={<Dashboard2 />} />
      </Routes>
    </BrowserRouter>
  );
}
