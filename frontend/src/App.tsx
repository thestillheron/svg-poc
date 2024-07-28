import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Exercises } from "./Exercises/Exercises";
import { AuthCallback } from "./AuthCallback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Exercises />,
  },
  {
    path: "/callback",
    element: <AuthCallback />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
