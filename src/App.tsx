import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Exercises } from "./Exercises/Exercises";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Exercises />,
  },
  {
    path: "/callback",
    element: <div>This is the callback</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
