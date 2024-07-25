import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import EnterPage from "./pages/EnterPage/EnterPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import StatPage from "./pages/StatPage/StatPage";
import QuizPage from "./pages/QuizPage/QuizPage";

import Root from "./Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/enter",
          element: <EnterPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/stat",
          element: <StatPage />,
        },
        {
          path: "/quiz/:id",
          element: <QuizPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
  // return <MainPage />
}

export default App;
