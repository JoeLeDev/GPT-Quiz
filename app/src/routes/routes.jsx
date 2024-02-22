import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage/HomePage.jsx";

export const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
];
export const router = createBrowserRouter(routesConfig);
