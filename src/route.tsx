import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import NotFoundPage from "./pages/not-found-page";

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
