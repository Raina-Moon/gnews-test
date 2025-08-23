import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    children: [{ path: "/", element: <HomePage /> }],
  },
]);
