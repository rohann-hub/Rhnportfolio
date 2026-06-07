import { createBrowserRouter } from "react-router";
import { PortfolioPage } from "./pages/PortfolioPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PortfolioPage,
  },
]);
