import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ErrorPage from "./ErrorPage/ErrorPage";
import QuizzPageHtml from "./QuizzPageHtml/QuizzPageHtml";
import QuizzPageJs from "./QuizzPageJs/QuizzPageJs";

export const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/quizz-html",
    element: <QuizzPageHtml />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/quizz-js",
    element: <QuizzPageJs />,
    errorElement: <ErrorPage />,
  }, 
   {
    path: "/*",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },

];
export const router = createBrowserRouter(routesConfig);